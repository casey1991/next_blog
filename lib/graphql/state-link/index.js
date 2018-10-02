import { withClientState } from "apollo-link-state";

export const DEFAULT_STATE = {};
export const createStateLink = cache => {
  return withClientState({
    cache,
    resolvers: {
      Mutation: {
        updateCurrentUser: (_, args, { cache }) => {
          const data = {
            currentUser: {
              __typename: "CurrentUser",
              ...args
            }
          };
          cache.writeData({ data });
          return null;
        }
      }
    },
    defaults: DEFAULT_STATE
  });
};
