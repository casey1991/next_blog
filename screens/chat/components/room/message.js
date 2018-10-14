import React, { Component } from "react";
import { List } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class Message extends Component {
  static propTypes = {
    text: PropTypes.string
  };
  static defaultProps = {
    text: "text"
  };
  constructor(props) {
    super(props);
  }

  render() {
    return <List.Item>{this.props.text}</List.Item>;
  }
}
