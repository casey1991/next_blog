import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "next/router";
import {
  Layout,
  Header,
  Sidebar,
  Main
} from "../../src/Components/Layouts/Basic";
class Page extends Component {
  static async getInitialProps(props) {
    return {};
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { router } = this.props;
    return (
      <Layout>
        <Header
          active={3}
          onItemClick={route => {
            router.push(route);
          }}
        />
        <Main />
      </Layout>
    );
  }
}
export default compose(withRouter)(Page);
