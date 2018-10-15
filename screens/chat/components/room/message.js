import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class Message extends Component {
  static propTypes = {
    message: PropTypes.object
  };
  static defaultProps = {
    message: {}
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return (
      <List.Item>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
        />
        <List.Content>
          <List.Header as="a">{message.user.name}</List.Header>
          <List.Description>{message.text}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}
