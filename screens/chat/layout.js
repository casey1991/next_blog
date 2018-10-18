import React, { Component } from "react";
import { Container } from "semantic-ui-react";
// import { Chat } from "../../components/chat";

export default class Layout extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
  }

  render() {
    return <Container fluid />;
  }
}
