import { withClientState } from "apollo-link-state";

export const DEFAULT_STATE = {};
export const createStateLink = cache => {
  return withClientState({
    cache,
    resolvers: {
      Mutation: {}
    },
    defaults: DEFAULT_STATE
  });
};
