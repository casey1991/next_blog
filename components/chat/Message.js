import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";

// components
import Avatar from "./Avatar";
import Bubble from "./Bubble";
import Name from "./Name";

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
    return <Bubble style={styles.bubble}>{message.text}</Bubble>;
  };
  _renderName = () => {
    const { message } = this.props;
    return <Name style={styles.name} message={message} />;
  };
  render() {
    return (
      <div style={[styles.containner]}>
        {this._renderName()}

        <div style={styles.content}>
          <Avatar style={styles.avatar} />
          {this._renderBubble()}
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
    flexDirection: "row"
  },
  name: {
    marginLeft: 60
  },
  bubble: {
    marginLeft: 10,
    color: "#fff"
  }
};
