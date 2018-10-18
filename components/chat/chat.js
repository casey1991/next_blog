// i want buid chat ui by styled-components
import React, { Component } from "react";
import MessagesContainer from "./MessagesContainer";
import Radium from "radium";
class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={[styles.container]}>
        <div style={[styles.menu]} />
        <div style={[styles.content]}>
          <MessagesContainer />
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
    backgroundColor: "#303",
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
    backgroundColor: "#309"
  }
};
