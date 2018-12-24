import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
if (!process.browser) {
  global.fetch = fetch;
}
export const getClient = () => {
  return new ApolloClient({
    link: new HttpLink(),
    ssrMode: !process.browser,
    cache: new InMemoryCache()
  });
};
