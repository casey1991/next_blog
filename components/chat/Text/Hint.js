import React, { Component } from "react";
import Radium from "radium";
// import PropTypes from "prop-types";
// components
// others
import { Colors, Dimensions } from "../Themes";
class Room extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
  }
  render() {
    const { style, children } = this.props;
    return <span style={[styles.base, style]}>{children}</span>;
  }
}
export default Radium(Room);
const styles = {
  base: {
    fontSize: Dimensions.TEXT_PRIMARY,
    color: Colors.TEXT_LIGHT_PRIMARY
  }
};
