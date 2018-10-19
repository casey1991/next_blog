import React, { Component } from "react";
import Radium from "radium";
// import PropTypes from "prop-types";
// components
// others
import { Colors, Dimensions } from "../Themes";
class Primary extends Component {
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
export default Radium(Primary);
const styles = {
  base: {
    fontSize: Dimensions.TEXT_PRIMARY,
    fontWeight: "bold",
    color: Colors.TEXT_LIGHT_PRIMARY
  }
};
