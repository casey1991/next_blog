import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import Sender from "./sender";
import Messages from "./messages";
export default class Chat extends Component {
  static propTypes = {
    messages: PropTypes.array,
    renderSender: PropTypes.func
  };
  static defaultProps = {
    messages: []
  };
  static Sender = Sender;
  constructor(props) {
    super(props);
  }
  render() {
    const { renderSender, messages } = this.props;
    return (
      <Segment>
        <Messages messages={messages} />
        {renderSender ? renderSender() : <Sender />}
      </Segment>
    );
  }
}
