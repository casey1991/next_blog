import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
// components
// others
import { Colors, Dimensions, Constants } from "./Themes";
class Text extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      Constants.TEXT_PRIMARY,
      Constants.TEXT_SECONDARY,
      Constants.TEXT_HINT
    ]),
    reverse: PropTypes.bool,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    type: Constants.TEXT_PRIMARY,
    disabled: false,
    reverse: false
  };
  constructor(props) {
    super(props);
  }
  _calculateColor = () => {
    const { reverse, type } = this.props;
    switch (type) {
      case Constants.TEXT_PRIMARY:
        return reverse ? Colors.TEXT_LIGHT_PRIMARY : Colors.TEXT_DARK_PRIMARY;
      case Constants.TEXT_SECONDARY:
        return reverse
          ? Colors.TEXT_LIGHT_SECONDARY
          : Colors.TEXT_DARK_SECONDARY;
      case Constants.TEXT_HINT:
        return reverse ? Colors.TEXT_LIGHT_HINT : Colors.TEXT_DARK_HINT;
      default:
        return reverse ? Colors.TEXT_LIGHT_PRIMARY : Colors.TEXT_DARK_PRIMARY;
    }
  };
  _calculateFontSize = () => {
    const { type } = this.props;
    switch (type) {
      case Constants.TEXT_PRIMARY:
        return Dimensions.TEXT_PRIMARY;
      case Constants.TEXT_SECONDARY:
        return Dimensions.TEXT_SECONDARY;
      case Constants.TEXT_HINT:
        return Dimensions.TEXT_HINT;
      default:
        return Dimensions.TEXT_PRIMARY;
    }
  };
  render() {
    const { style, children } = this.props;
    const color = this._calculateColor();
    const fontSize = this._calculateFontSize();
    return (
      <span style={[styles.base, style, { color: color, fontSize: fontSize }]}>
        {children}
      </span>
    );
  }
}
export default Radium(Text);
const styles = {
  base: {
    fontSize: Dimensions.TEXT_PRIMARY,
    color: Colors.TEXT_LIGHT_PRIMARY
  }
};
