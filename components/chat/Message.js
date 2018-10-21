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
      <div style={[styles.layoutContainer]}>
        <Avatar style={styles.avatar} />
        <div style={styles.layoutContentContainer}>
          <div style={styles.layoutNameContainer}>{this._renderName()}</div>
          <div style={styles.layoutInnerContentContainer}>
            {this._renderBubble()}
            {this._renderStatus()}
          </div>
        </div>
      </div>
    );
  }
}
export default Radium(Message);
const styles = {
  layoutContainer: {
    display: "flex",
    flexDirection: "row"
  },
  layoutContentContainer: {
    flex: 1,
    display: "flex",
    marginLeft: 10,
    marginRight: 60,
    flexDirection: "column"
  },
  layoutNameContainer: {
    marginBottom: 10
  },
  layoutInnerContentContainer: {
    display: "flex",
    flexDirection: "row"
  }
};
