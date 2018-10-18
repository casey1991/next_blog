import React, { Component } from "react";
import Radium from "radium";

class MessageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={[styles.container]}>
        <ul style={[styles.messagesContainer]}>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
          <li style={[styles.message]}>hei</li>
        </ul>
      </div>
    );
  }
}
export default Radium(MessageContainer);
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#401",
    overflow: "auto"
  },
  messagesContainer: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    overflow: "inherit"
  },
  message: {
    display: "block",
    padding: 10
  }
};
