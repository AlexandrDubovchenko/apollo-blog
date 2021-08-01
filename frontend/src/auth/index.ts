import {
  ApolloClient,
  NormalizedCacheObject,
  FetchResult,
  useQuery,
  gql,
} from "@apollo/client";
import {
  RefreshTokenMutation,
  RefreshTokenDocument,
} from "./generated/Auth.mutation.generated";

export const getNewToken = (
  client: ApolloClient<NormalizedCacheObject>
): Promise<FetchResult<RefreshTokenMutation>> => {
  const refreshToken = localStorage.getItem("refresh");
  return client.mutate({
    mutation: RefreshTokenDocument,
    variables: { refreshToken },
  });
};

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const IsLoggedIn = (): boolean => {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn;
};
