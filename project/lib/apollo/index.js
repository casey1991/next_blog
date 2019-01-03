import getConfig from "next/config";
import { split } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
import { getMainDefinition } from "apollo-utilities";
import { WebSocketLink } from "apollo-link-ws";
if (!process.browser) {
  global.fetch = fetch;
}
const { publicRuntimeConfig } = getConfig();
const httpLink = new HttpLink({ uri: publicRuntimeConfig.API_URL });
const wsLink = process.browser
  ? new WebSocketLink({
      uri: publicRuntimeConfig.SOCKET_URL,
      options: { reconnect: true }
    })
  : null;
const link = process.browser
  ? split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink,
      httpLink
    )
  : httpLink;
export const getClient = () => {
  return new ApolloClient({
    link,
    ssrMode: !process.browser,
    cache: new InMemoryCache()
  });
};
