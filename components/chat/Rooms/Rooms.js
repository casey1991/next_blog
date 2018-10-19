import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { map } from "lodash";
// components
import Room from "./Room";
// others
import { Colors, Dimensions } from "../Themes";
import { RoomShape } from "../utils";

class Rooms extends Component {
  static propTypes = {
    rooms: PropTypes.arrayOf(RoomShape),
    selectedRoom: PropTypes.string,
    onItemClick: PropTypes.func
  };
  static defaultProps = {
    rooms: [],
    selectedRoom: null,
    onItemClick: () => {}
  };
  constructor(props) {
    super(props);
  }
  _renderItem = room => {
    const { selectedRoom, onItemClick } = this.props;
    return (
      <Room
        active={room.id === selectedRoom ? true : false}
        room={room}
        onClick={room => {
          onItemClick(room.id);
        }}
      />
    );
  };
  render() {
    const { rooms, style } = this.props;
    return (
      <ul style={[style, styles.containner]}>
        {map(rooms, room => this._renderItem(room))}
      </ul>
    );
  }
}
export default Radium(Rooms);
const styles = {
  containner: {
    flex: 1,
    margin: 0,
    padding: 0,
    overflow: "auto",
    listStyle: "none"
  }
};
