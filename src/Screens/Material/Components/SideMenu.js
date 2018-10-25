import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Radium from "radium";
import { map } from "lodash";
class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _itemFactory = () => {
    const items = [];
    for (var i = 1; i <= 50; i++) {
      items.push({ id: i, name: "item" + i });
    }
    return items;
  };
  _renderItem = item => {
    return <li key={item.id}>{item.name}</li>;
  };
  render() {
    const items = this._itemFactory();
    return (
      <ul style={[styles.layoutContainer]}>
        {map(items, item => this._renderItem(item))}
      </ul>
    );
  }
}

export default Radium(SideMenu);
const styles = {
  layoutContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    listStyle: "none",
    overflow: "auto"
  }
};
