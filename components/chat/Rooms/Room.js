import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
// components
import Avatar from "../Avatar";
import Text from "../Text";
// others
import { Colors, Constants } from "../Themes";
import { RoomShape } from "../utils";
class Room extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    room: RoomShape,
    onClick: PropTypes.func
  };
  static defaultProps = {
    selected: false,
    onClick: () => {}
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { style, selected, room, onClick } = this.props;
    return (
      <li
        style={[style, styles.containner, selected ? styles.selected : null]}
        onClick={() => {
          onClick(room);
        }}
      >
        <Avatar size={60} />
        <div style={[styles.content]}>
          <Text type={Constants.TEXT_PRIMARY} reverse>
            {room.name}
          </Text>
          <Text type={Constants.TEXT_SECONDARY} reverse>
            Description
          </Text>
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
      backgroundColor: Colors.PRIMARY_LIGHT
    }
  },
  selected: {
    backgroundColor: Colors.PRIMARY_LIGHT
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10
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
