// i want buid chat ui by styled-components
import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
// components
import MessagesContainer from "./MessagesContainer";
// utils
import { MessageShape } from "./utils";

class Chat extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(MessageShape)
  };
  static defaultProps = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={[styles.container]}>
        <div style={[styles.menu]} />
        <div style={[styles.content]}>
          <div style={[styles.header]} />
          <div style={[styles.subContent]}>
            <MessagesContainer messages={this.props.messages} />
          </div>
          <div style={[styles.footer]} />
        </div>
      </div>
    );
  }
}
export default Radium(Chat);
const styles = {
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "#303",
    width: "100%",
    height: "100%"
  },
  menu: {
    flex: 3,
    display: "flex",
    backgroundColor: "#306"
  },
  content: {
    flex: 7,
    display: "flex",
    flexDirection: "column"
    // backgroundColor: "#309"
  },
  header: {
    height: 60,
    backgroundColor: "#401"
  },
  subContent: {
    flex: 1,
    overflow: "auto",
    paddingLeft: 20,
    paddingRight: 20
    // backgroundColor: "#403"
  },
  footer: {
    height: 60,
    backgroundColor: "#406"
  }
};
