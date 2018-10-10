import React, { Component } from "react";

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
