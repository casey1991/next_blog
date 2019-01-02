import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "next/router";
import { Layout, Header, Main, Document } from "../../src/Screens/Document";

class Page extends Component {
  static async getInitialProps(props) {
    return {};
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const { router } = this.props;
    return (
      <Layout>
        <Header
          active={2}
          onItemClick={route => {
            router.push(route);
          }}
        />
        <Main>
          <Document />
        </Main>
      </Layout>
    );
  }
}
export default compose(withRouter)(Page);
