import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "next/router";
import {
  Layout,
  Header,
  Sidebar,
  Main
} from "../../src/Components/Layouts/Basic";

// temp
import gql from "graphql-tag";
import { graphql, withApollo } from "react-apollo";
class Page extends Component {
  static async getInitialProps(props) {
    return {};
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.client);
  }
  render() {
    const { router } = this.props;
    return (
      <Layout>
        <Header
          active={1}
          onItemClick={route => {
            router.push(route);
          }}
        />
        <Sidebar />
        <Main />
      </Layout>
    );
  }
}
export default compose(
  withRouter,
  withApollo,
  graphql(gql`
    query {
      cats {
        id
        name
      }
    }
  `)
)(Page);
