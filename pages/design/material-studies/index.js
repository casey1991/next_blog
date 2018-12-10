import React, { Component } from "react";
import { Layout } from "../../../src/Components/Layouts/Basic";
export default class Page extends Component {
  static async getInitialProps(props) {
    return {};
  }
  constructor(props) {
    super(props);
  }
  render() {
    return <Layout />;
  }
}
