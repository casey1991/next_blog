import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
// components
import Room from "./Room";
// themes
import { Colors, Dimensions } from "../Themes";

class Rooms extends Component {
  static propTypes = {
    rooms: PropTypes.array
  };
  static defaultProps = {};
  constructor(props) {
    super(props);
  }
  _renderItem = () => {};
  render() {
    const { children, style } = this.props;
    return (
      <ul style={[style, styles.containner]}>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
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
