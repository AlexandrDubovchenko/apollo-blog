/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
/* eslint-disable no-loop-func */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable default-case */
/* eslint-disable no-restricted-syntax */

import {
  ApolloClient,
  createHttpLink,
  from,
  fromPromise,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RefreshTokenDocument } from "../auth/generated/Auth.mutation.generated";
import { cache, isLoggedInVar } from "./cache";

let isRefreshing = false;
let pendingRequests: (() => void)[] = [];

const resolvePendingRequests = () => {
  pendingRequests.map((callback: () => void) => callback());
  pendingRequests = [];
};

export const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:4000/graphql",
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: token || "",
    },
  };
});

export const errorLink = onError(
  // eslint-disable-next-line consistent-return
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err.extensions?.code) {
          // Apollo Server sets code to UNAUTHENTICATED
          // when an AuthenticationError is thrown in a resolver
          case "UNAUTHENTICATED":
            let forward$;
            if (!isRefreshing) {
              isRefreshing = true;
              forward$ = fromPromise(
                client
                  .mutate({
                    mutation: RefreshTokenDocument,
                    variables: {
                      refreshToken: localStorage.getItem("refreshToken"),
                    },
                  })
                  .then(({ data: { refreshToken } }) => {
                    localStorage.setItem("token", refreshToken.accessToken);
                    isLoggedInVar(true);
                    return true;
                  })
                  .then(() => {
                    resolvePendingRequests();
                    return true;
                  })
                  .catch(() => {
                    pendingRequests = [];
                    return false;
                  })
                  .finally(() => {
                    isRefreshing = false;
                  })
              );
            } else {
              forward$ = fromPromise(
                new Promise<void>((resolve) => {
                  pendingRequests.push(() => resolve());
                })
              );
            }
            return forward$.flatMap(() => forward(operation));

          default:
            console.log(
              `[GraphQL error]: Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`
            );
          // Modify the operation context with a new token
          // Retry the request, returning the new observable
        }
      }
    }
    if (networkError) {
      console.log(networkError);
    }
  }
);

export const client = new ApolloClient({
  cache,
  link: from([errorLink, authLink, splitLink]),
  connectToDevTools: true,
});
