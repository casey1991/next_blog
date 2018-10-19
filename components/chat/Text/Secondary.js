import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
// components
// others
import { Colors, Dimensions } from "../Themes";
class Secondary extends Component {
  static propTypes = {
    text: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    reverse: PropTypes.bool
  };
  static defaultProps = {
    color: Colors.TEXT_PRIMARY,
    size: Dimensions.TEXT_PRIMARY,
    reverse: false
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { style, children, size, color, text } = this.props;
    return (
      <span
        style={[
          style,
          {
            fontSize: size ? size : Dimensions.TEXT_SECONDARY,
            color: color ? color : Colors.TEXT_LIGHT_SECONDARY
          }
        ]}
      >
        {children}
      </span>
    );
  }
}
export default Radium(Secondary);
