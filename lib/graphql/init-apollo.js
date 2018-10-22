import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split, from } from "apollo-link";
import fetch from "isomorphic-unfetch";
import { getMainDefinition } from "apollo-utilities";
import {
  createHttpLink,
  createAuthLink,
  createWebSocketLink,
  createErrorsLink
} from "./links";

let apolloClient = null;
if (!process.browser) {
  global.fetch = fetch;
}
const createClientSideApollo = (
  initialState = {},
  options = { getToken: () => null }
) => {
  // links
  const cache = new InMemoryCache().restore(initialState);
  const errorLink = createErrorsLink();
  const authLink = createAuthLink(options.getToken);
  const httpLink = createHttpLink();
  const wsLink = createWebSocketLink(options.getToken);
  const httpWsLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
  );
  const links = from([errorLink, authLink, httpWsLink]);
  return new ApolloClient({
    ssrMode: false,
    link: links,
    cache
  });
};
const createServerSideApollo = (
  initialState,
  options = { getToken: () => null }
) => {
  // links
  const cache = new InMemoryCache().restore(initialState);
  const errorLink = createErrorsLink();
  const authLink = createAuthLink(options.getToken);
  const httpLink = createHttpLink();

  const links = from([errorLink, authLink, httpLink]);
  return new ApolloClient({
    ssrMode: false,
    link: links,
    cache
  });
};
export default function initApollo(initialState, options) {
  if (!process.browser) {
    return createServerSideApollo(initialState, options);
  }
  if (!apolloClient) {
    apolloClient = createClientSideApollo(initialState, options);
  }
  return apolloClient;
}
