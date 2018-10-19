import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
// components
import Avatar from "../Avatar";
// themes
import { Colors } from "../Themes";
class Room extends Component {
  static propTypes = {
    active: PropTypes.bool
  };
  static defaultProps = {
    active: false
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { style, active } = this.props;
    return (
      <li
        style={[style, styles.containner, active ? styles.active : null]}
        active
      >
        <Avatar size={60} />
        <div style={[styles.content]}>
          <span style={[styles.title]}>Title</span>{" "}
          <span style={[styles.description]}>Description</span>
        </div>
        <span style={[styles.badge]}>99</span>
      </li>
    );
  }
}
export default Radium(Room);
const styles = {
  containner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    ":hover": {
      backgroundColor: Colors.PRIMARY_DARK
    }
  },
  active: {
    backgroundColor: Colors.PRIMARY_DARK
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10
  },
  title: {
    color: "#EEE"
  },
  description: {
    color: "#DDD"
  },
  badge: {
    display: "flex",
    width: 24,
    height: 24,
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: "50%",
    color: Colors.PRIMARY
  }
};
