// i want buid chat ui by styled-components
import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
// components
import MessagesContainer from "./MessagesContainer";
import ActionBar from "./ActionBar";
import Sender from "./Sender";
import { Rooms } from "./Rooms";
import Menu from "./Menu/index";
// utils
import { MessageShape, UserShape, RoomShape } from "./utils";

// styles
import { Colors } from "./Themes";

class Chat extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(MessageShape),
    rooms: PropTypes.arrayOf(RoomShape),
    user: UserShape.isRequired,
    renderActionBar: PropTypes.func,
    renderRooms: PropTypes.func
  };
  static defaultProps = {
    messages: [],
    rooms: []
  };
  static Sender = Sender;
  static ActionBar = ActionBar;
  static Rooms = Rooms;
  constructor(props) {
    super(props);
  }

  render() {
    const { renderActionBar, renderRooms, rooms, messages } = this.props;
    return (
      <div style={[styles.container]}>
        <div style={[styles.menu]}>
          <Menu>{renderRooms ? renderRooms() : <Rooms rooms={rooms} />}</Menu>
        </div>
        <div style={[styles.content]}>
          <div style={[styles.header]} />
          <div style={[styles.subContent]}>
            <MessagesContainer messages={messages} />
          </div>
          <div style={[styles.footer]}>
            {renderActionBar ? renderActionBar() : <ActionBar />}
          </div>
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
    width: "100%",
    height: "100%"
  },
  menu: {
    flex: 3,
    backgroundColor: Colors.PRIMARY
  },
  content: {
    flex: 7,
    display: "flex",
    flexDirection: "column"
  },
  header: {
    height: 80,
    backgroundColor: Colors.WHITE
  },
  subContent: {
    flex: 1,
    overflow: "auto",
    paddingLeft: 20,
    backgroundColor: Colors.WHITE
  },
  footer: {
    height: 60
  }
};
