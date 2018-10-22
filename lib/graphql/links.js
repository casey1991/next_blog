import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
export const createHttpLink = () => {
  const httpLink = new HttpLink({
    uri: "http://localhost:3210/graphql",
    credentials: "same-origin"
  });
  return httpLink;
};
export const createWebSocketLink = getToken => {
  const wsLink = new WebSocketLink({
    uri: "ws://localhost:3210/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        Authorization: getToken() ? `Bearer ${getToken()}` : ""
      }
    }
  });
  return wsLink;
};
export const createAuthLink = getToken => {
  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });
  return authLink;
};
export const createErrorsLink = () => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
  return errorLink;
};
