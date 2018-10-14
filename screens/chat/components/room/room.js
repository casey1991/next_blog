import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import { map } from "lodash";
import Sender from "./sender";
import Message from "./message";
export default class Room extends Component {
  static propTypes = {
    messages: PropTypes.array,
    onItemClicked: PropTypes.func,
    renderSender: PropTypes.func
  };
  static defaultProps = {
    messages: [],
    onItemClicked: () => {}
  };
  static Sender = Sender;
  constructor(props) {
    super(props);
    this.state = {
      messages: this._messageFactory()
    };
  }
  _messageFactory = () => {
    const count = 10;
    const messages = [];
    const createMessage = index => {
      return { text: index };
    };
    for (var i = 1; i <= count; i++) {
      messages.push(createMessage(i));
    }
    return messages;
  };
  _renderItem = message => {
    return (
      <div key={message.id}>
        <Message text={message.text} />
      </div>
    );
  };
  render() {
    const { renderSender } = this.props;
    return (
      <Segment>
        <List>
          {map(this.props.messages, message => {
            return this._renderItem(message);
          })}
        </List>
        {renderSender ? renderSender() : <Sender />}
      </Segment>
    );
  }
}
