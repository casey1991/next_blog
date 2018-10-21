import React, { Component } from "react";
import ChatText from "../Text";
export default class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return <ChatText>{message.text}</ChatText>;
  }
}
