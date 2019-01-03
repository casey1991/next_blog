import getConfig from "next/config";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
import { WebSocketLink } from "apollo-link-ws";
if (!process.browser) {
  global.fetch = fetch;
}
const { publicRuntimeConfig } = getConfig();
const httpLink = new HttpLink({ uri: publicRuntimeConfig.API_URL });
const wsLink = new WebSocketLink({
  uri: publicRuntimeConfig.SOCKET_URL,
  options: { reconnect: true }
});
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);
export const getClient = () => {
  return new ApolloClient({
    link,
    ssrMode: !process.browser,
    cache: new InMemoryCache()
  });
};
