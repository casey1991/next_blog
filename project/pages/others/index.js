import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "next/router";
import { Layout, Header, Main, Goodss } from "../../src/Screens/Goods";

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
        <Main style={{ paddingTop: 120 }}>
          <Goodss />
        </Main>
      </Layout>
    );
  }
}
export default compose(withRouter)(Page);
