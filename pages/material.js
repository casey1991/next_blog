import React, { Component } from "react";
import { StyleRoot } from "radium";
import { Layout } from "../src/Screens/Material";
export default class Page extends Component {
  static async getInitialProps(props) {
    return {};
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyleRoot>
        <Layout />;
      </StyleRoot>
    );
  }
}
