import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import Color from "color";
import { withTheme } from "./withTheme";
class Button extends Component {
  static propTypes = {
    theme: PropTypes.shape({ Colors: {}, Dimensions: {}, Constatns: {} }),
    type: PropTypes.oneOfType(["Text", "Outline", "Contained", "Toggle"]),
    disabled: PropTypes.bool
  };
  static defaultProps = {
    theme: { Colors: {}, Dimensions: {}, Constatns: {} },
    type: "Contained",
    disabled: false
  };
  constructor(props) {
    super(props);
  }
  _getHover = () => {
    const {
      disabled,
      type,
      theme: { Colors }
    } = this.props;
    let hoverType = type;
    const bgColor = this._getBackgroundColor();
    const color = this._getColor();
    if (disabled) hoverType = "Disabled";
    const hover = {
      Disabled: {},
      Text: {
        backgroundColor: bgColor.lighten(0.2),
        color: color.lighten(0.2)
      },
      Outline: {
        backgroundColor: bgColor.lighten(0.2),
        color: color.lighten(0.2)
      },
      Contained: {
        backgroundColor: bgColor.lighten(0.2),
        color: color.lighten(0.2)
      },
      Toggle: {
        backgroundColor: bgColor.lighten(0.2),
        color: color.lighten(0.2)
      }
    };
    return hover[hoverType];
  };
  _getBorder = () => {
    const {
      disabled,
      type,
      theme: { Colors }
    } = this.props;
    let borderType = type;
    if (disabled) borderType = "Disabled";
    const border = {
      Disabled: `1px solid ${Colors.Transparent}`,
      Text: `1px solid ${Colors.Transparent}`,
      Outline: `1px solid ${Color(Colors.White).darken(0.4)}`,
      Contained: `1px solid ${Colors.Transparent}`,
      Toggle: `1px solid ${Colors.Transparent}`
    };
    return border[borderType];
  };
  _getBackgroundColor = () => {
    const {
      disabled,
      type,
      theme: { Colors }
    } = this.props;
    let bgType = type;
    if (disabled) bgType = "Disabled";
    const bgColor = {
      Disabled: Color(Colors.White).darken(0.2),
      Text: Color(Colors.Transparent),
      Outline: Color(Colors.Transparent),
      Contained: Color(Colors.Primary),
      Toggle: Color(Colors.White)
    };
    return bgColor[bgType];
  };
  _getColor = () => {
    const {
      disabled,
      type,
      theme: { Colors }
    } = this.props;
    let colorType = type;
    if (disabled) colorType = "Disabled";
    const bgColor = this._getBackgroundColor();
    const color = {
      Disabled: Color(Colors.White).darken(0.6),
      Text: Color(Colors.Primary),
      Outline: Color(Colors.Primary),
      Contained: bgColor.isDark()
        ? Color(Colors.Text).negate()
        : Color(Colors.Text),
      Toggle: Color(Colors.Text)
    };
    return color[colorType];
  };
  _getStyles = () => {
    const bgColor = this._getBackgroundColor();
    const color = this._getColor();
    const border = this._getBorder();
    return {
      container: {
        display: "inline-block",
        minWidth: "48px",
        padding: "5px 10px",
        margin: "5px",
        fontSize: "14px",
        color: color,
        backgroundColor: bgColor,
        borderRadius: "4px",
        border: border,
        ":hover": this._getHover()
      }
    };
  };
  render() {
    const styles = this._getStyles();
    return <span style={[styles.container]}>{this.props.children}</span>;
  }
}
export default withTheme(Radium(Button));
