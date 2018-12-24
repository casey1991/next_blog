import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
if (!process.browser) {
  global.fetch = fetch;
}
const httpLink = new HttpLink({ uri: "http://localhost:4444/graphql" });
export const getClient = () => {
  return new ApolloClient({
    link: httpLink,
    ssrMode: !process.browser,
    cache: new InMemoryCache()
  });
};
