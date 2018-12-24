import App, { Container } from "next/app";
import React from "react";
// material ui config
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import getMaterialContext from "../lib/context/getMaterialContext";
// redux config
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import makeStore from "../src/Redux";
// apollo config
import { ApolloProvider } from "react-apollo";
import { getClient } from "../lib/apollo";
class CApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getMaterialContext();
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* apollo provider */}
            <ApolloProvider client={getClient()}>
              {/* redux provider */}
              <Provider store={store}>
                <Component {...pageProps} pageContext={this.pageContext} />
              </Provider>
            </ApolloProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(CApp);
