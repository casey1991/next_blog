import getConfig from "next/config";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
if (!process.browser) {
  global.fetch = fetch;
}
const { publicRuntimeConfig } = getConfig();
const httpLink = new HttpLink({ uri: publicRuntimeConfig.API_URL });
export const getClient = () => {
  return new ApolloClient({
    link: httpLink,
    ssrMode: !process.browser,
    cache: new InMemoryCache()
  });
};
