import React, { Component } from "react";
import { List } from "semantic-ui-react";
import PropTypes from "prop-types";
import md5 from "md5";
import { map } from "lodash";
import Message from "./message";
export default class Messages extends Component {
  static propTypes = {
    messages: PropTypes.array
  };
  static defaultProps = {
    messages: []
  };
  constructor(props) {
    super(props);
    this.state = {
      messages: this._prepareMessages(props.messages)
    };
  }
  componentDidUpdate = prevProps => {
    const { messages: prevMessages } = prevProps;
    const { messages: currentMessages } = this.props;
    if (prevMessages === currentMessages) return;
    this.setState({
      messages: this._prepareMessages(currentMessages)
    });
  };
  _prepareMessages(messages) {
    let result = [];
    result = messages.map((message, index) => {
      const previousMessage = messages[index + 1] || {};
      const nextMessage = messages[index - 1] || {};
      const toHash =
        JSON.stringify(message) + previousMessage._id + nextMessage._id;
      return { ...message, previousMessage, nextMessage, key: md5(toHash) };
    });
    return result;
  }
  _renderItem = message => {
    return <Message message={message} key={message.id} />;
  };
  render() {
    return (
      <List divided relaxed>
        {map(this.state.messages, message => {
          return this._renderItem(message);
        })}
      </List>
    );
  }
}
