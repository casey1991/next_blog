import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";

// components
import Avatar from "./Avatar";
import Bubble from "./Bubble";
import Name from "./Name";
import Text from "./Text";

// others
import { Constants } from "./Themes";
import { messageContentHelper } from "./utils";
class Message extends Component {
  static propTypes = {
    message: PropTypes.object
  };
  static defaultProps = {
    message: {}
  };
  constructor(props) {
    super(props);
  }
  _renderBubble = () => {
    const { message } = this.props;
    return (
      <Bubble style={styles.bubble}>{messageContentHelper(message)}</Bubble>
    );
  };
  _renderName = () => {
    const { message } = this.props;
    return <Name style={styles.name} message={message} />;
  };
  _renderStatus = () => {
    const { message } = this.props;
    return (
      <span style={{ marginLeft: 10 }}>
        {message.status === Constants.STATUS_SENNDING ? (
          <Text type={Constants.TEXT_HINT}>loading</Text>
        ) : (
          <Text type={Constants.TEXT_HINT}>received</Text>
        )}
      </span>
    );
  };
  render() {
    return (
      <div style={[styles.containner]}>
        {this._renderName()}

        <div style={styles.content}>
          <Avatar style={styles.avatar} />
          {this._renderBubble()}
          {this._renderStatus()}
        </div>
      </div>
    );
  }
}
export default Radium(Message);
const styles = {
  containner: {
    display: "flex",
    flexDirection: "column"
  },
  avatar: {},
  content: {
    display: "flex",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    marginLeft: 60
  },
  bubble: {
    marginLeft: 10,
    color: "#666"
  }
};
