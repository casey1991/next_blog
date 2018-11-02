import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import Color from "color";
import { withTheme } from "./withTheme";
import { themeShape, defaultThemeShape } from "./utils";
// text should not have color? dicide by parent ?
class Text extends Component {
  static propTypes = {
    theme: PropTypes.shape(themeShape),
    type: PropTypes.oneOfType([
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "Subtitle1",
      "Subtitle2",
      "Body1",
      "Body2",
      "Button",
      "Caption",
      "Overline"
    ]),
    emphasis: PropTypes.oneOfType(["High", "Medium", "Disabled"]),
    inverted: PropTypes.bool
  };
  static defaultProps = {
    theme: defaultThemeShape,
    type: "Body1",
    emphasis: "High",
    inverted: false
  };
  constructor(props) {
    super(props);
  }
  _getOpacity = () => {
    const { emphasis, inverted } = this.props;
    const opacities = {
      High: inverted ? "1" : "0.87",
      Medium: inverted ? "0.6" : "0.6",
      Disabled: inverted ? "0.38" : "0.38"
    };
    return opacities[emphasis];
  };
  _getColor = () => {
    const {
      inverted,
      theme: { Colors }
    } = this.props;
    return inverted ? Color(Colors.Text).negate() : Color(Colors.Text);
  };
  _getFontStyles = () => {
    const { type } = this.props;
    const styles = {
      H1: {
        fontSize: "96px",
        fontWeight: 300,
        letterSpacing: -1.5,
        fontFamily: "Roboto"
      },
      H2: {
        fontSize: "60px",
        fontWeight: 300,
        letterSpacing: -0.5,
        fontFamily: "Roboto"
      },
      H3: { fontSize: "48px", letterSpacing: 0, fontFamily: "Roboto" },
      H4: {
        fontSize: "34px",
        fontWeight: 300,
        letterSpacing: 0.25,
        fontFamily: "Roboto"
      },
      H5: {
        fontSize: "24px",
        fontWeight: 300,
        letterSpacing: 0,
        fontFamily: "Roboto"
      },
      H6: {
        fontSize: "20px",
        fontWeight: 400,
        letterSpacing: 0.15,
        fontFamily: "Roboto"
      },
      Subtitle1: {
        fontSize: "16px",
        fontWeight: 300,
        letterSpacing: 0.15,
        fontFamily: "Roboto"
      },
      Subtitle2: {
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: 0.1,
        fontFamily: "Roboto"
      },
      Body1: {
        fontSize: "16px",
        fontWeight: 300,
        letterSpacing: 0.5,
        fontFamily: "Roboto"
      },
      Body2: {
        fontSize: "14px",
        fontWeight: 300,
        letterSpacing: 0.25,
        fontFamily: "Roboto"
      },
      Button: {
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: 1.25,
        fontFamily: "Roboto"
      },
      Caption: {
        fontSize: "12px",
        fontWeight: 300,
        letterSpacing: 0.4,
        fontFamily: "Roboto"
      },
      Overline: {
        fontSize: "10px",
        fontWeight: 300,
        letterSpacing: 1.5,
        fontFamily: "Roboto"
      }
    };
    return styles[type];
  };
  _getStyles = () => {
    return {
      container: {
        ...this._getFontStyles(),
        opacity: this._getOpacity(),
        color: this._getColor()
      }
    };
  };
  render() {
    const styles = this._getStyles();
    const { style } = this.props;
    return (
      <text style={[styles.container, style]} ref={this._container}>
        {this.props.children}
      </text>
    );
  }
}

export default withTheme(Radium(Text));
