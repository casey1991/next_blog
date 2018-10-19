import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { map } from "lodash";
import md5 from "md5";

// components
import ReactList from "react-list";
import Message from "./Message";

class MessagesContainer extends Component {
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
    this._list = React.createRef();
  }
  componentDidUpdate = prevProps => {
    const { messages: prevMessages } = prevProps;
    const { messages: currentMessages } = this.props;
    if (prevMessages === currentMessages) return;
    this.setState({
      messages: this._prepareMessages(currentMessages)
    });
    this._scrollToBottom();
  };
  _scrollToBottom = () => {
    this._list.current.scrollTo(this.state.messages.length);
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
  _renderItem = index => {
    const { messages } = this.state;
    const message = messages[index];
    return (
      <li style={[styles.message]} key={message.id}>
        <Message message={message} />
      </li>
    );
  };
  _itemFactory = () => {
    const messages = [];
    for (let i = 1; i <= 100; i++) {
      messages.push({
        text: "text" + i,
        id: i,
        user: { id: i, name: "Casey" + i }
      });
    }
    return messages;
  };
  render() {
    // const messages = this._itemFactory();
    const { messages } = this.state;
    return (
      <div style={[styles.container]}>
        <div style={[styles.messagesContainer]}>
          <ReactList
            ref={this._list}
            itemRenderer={this._renderItem}
            length={messages.length}
            type="uniform"
          />
        </div>
      </div>
    );
  }
}
export default Radium(MessagesContainer);
const styles = {
  container: {},
  messagesContainer: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    backgrounndColor: "#303"
  },
  message: {
    display: "block",
    padding: 10
  }
};
