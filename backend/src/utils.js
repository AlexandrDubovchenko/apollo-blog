import { AuthenticationError } from "apollo-server";
import jwt from "jsonwebtoken";

const SECRET = "TEST"

export function userAccess(resolvers) {
  Object.keys(resolvers).forEach((k) => {
    resolvers[k] = resolvers[k].wrapResolve(next => (rp) => {
      const token = rp.context.req.headers.authorization;
      if (!token) {
        return new AuthenticationError('You should be logged in, to have access to this action.');
      }
      try {
        if (!jwt.verify(token, SECRET)) {
          return new AuthenticationError('You should be logged in, to have access to this action.');
        }
      } catch (error) {
        return new AuthenticationError('You should be logged in, to have access to this action.');
      }

      return next(rp);
    });
  });
  return resolvers;
}
