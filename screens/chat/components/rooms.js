import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import { map } from "lodash";
import PropTypes from "prop-types";

export default class Rooms extends Component {
  static propTypes = {
    rooms: PropTypes.array,
    renderItem: PropTypes.func,
    onItemClicked: PropTypes.func
  };
  static defaultProps = {
    renderItem: () => {},
    onItemClicked: () => {}
  };
  constructor(props) {
    super(props);
  }
  _renderItem = room => {
    const { onItemClicked } = this.props;
    return (
      <List.Item
        key={room.id}
        onClick={() => {
          onItemClicked(room.id);
        }}
      >
        <Image avatar src="/static/img/home_bg.jpg" />
        <List.Content>
          <List.Header>{room.name}</List.Header>
          <List.Description>description</List.Description>
        </List.Content>
      </List.Item>
    );
  };
  render() {
    const { rooms } = this.props;
    return (
      <List>
        {map(rooms, room => {
          return this._renderItem(room);
        })}
      </List>
    );
  }
}
