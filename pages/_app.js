import App, { Container } from "next/app";
import { Provider } from "react-redux";
import React from "react";
import { withApolloClient } from "../lib/graphql";
import { ApolloProvider } from "react-apollo";
import withReduxSaga from "../lib/redux/withReduxSaga";

class CApp extends App {
  render() {
    const { Component, pageProps, apolloClient, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Provider>
      </Container>
    );
  }
}

export default withReduxSaga(withApolloClient(CApp));
