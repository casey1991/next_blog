import App, { Container } from "next/app";
import { Provider } from "react-redux";
import React from "react";
import { withApolloClient } from "../lib/graphql";
import { ApolloProvider } from "react-apollo";
import withReduxSaga from "../lib/redux/withReduxSaga";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import getMaterialContext from "../lib/context/getMaterialContext";
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
    const {
      Component,
      pageProps,
      apolloClient,
      store,
      materialContext
    } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ApolloProvider client={apolloClient}>
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
                <Component {...pageProps} pageContext={this.pageContext} />
              </MuiThemeProvider>
            </JssProvider>
          </ApolloProvider>
        </Provider>
      </Container>
    );
  }
}

export default withReduxSaga(withApolloClient(CApp));
