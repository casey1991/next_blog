import React, { Component } from "react";
import Layout from "../components/Layout";
import { GoodsList } from "../containers/graphql";

export default class Page extends Component {
  static async getInitialProps(props) {
    return {};
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <GoodsList />
      </Layout>
    );
  }
}
