import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
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
    inverted: PropTypes.bool
  };
  static defaultProps = {
    theme: defaultThemeShape,
    type: "Body1",
    inverted: false
  };
  constructor(props) {
    super(props);
  }
  _getFontStyles = () => {
    const { type } = this.props;
    const styles = {
      H1: {
        fontSize: "96px",
        fontWeight: "lighter",
        letterSpacing: -1.5,
        fontFamily: "Roboto"
      },
      H2: {
        fontSize: "60px",
        fontWeight: "lighter",
        letterSpacing: -0.5,
        fontFamily: "Roboto"
      },
      H3: { fontSize: "48px", letterSpacing: 0, fontFamily: "Roboto" },
      H4: {
        fontSize: "34px",
        fontWeight: "lighter",
        letterSpacing: 0.25,
        fontFamily: "Roboto"
      },
      H5: {
        fontSize: "24px",
        fontWeight: "lighter",
        letterSpacing: 0,
        fontFamily: "Roboto"
      },
      H6: {
        fontSize: "20px",
        fontWeight: "bolder",
        letterSpacing: 0.15,
        fontFamily: "Roboto"
      },
      Subtitle1: {
        fontSize: "16px",
        fontWeight: "lighter",
        letterSpacing: 0.15,
        fontFamily: "Roboto"
      },
      Subtitle2: {
        fontSize: "14px",
        fontWeight: "bolder",
        letterSpacing: 0.1,
        fontFamily: "Roboto"
      },
      Body1: {
        fontSize: "16px",
        fontWeight: "lighter",
        letterSpacing: 0.5,
        fontFamily: "Roboto"
      },
      Body2: {
        fontSize: "14px",
        fontWeight: "lighter",
        letterSpacing: 0.25,
        fontFamily: "Roboto"
      },
      Button: {
        fontSize: "14px",
        fontWeight: "bolder",
        letterSpacing: 1.25,
        fontFamily: "Roboto"
      },
      Caption: {
        fontSize: "12px",
        fontWeight: "lighter",
        letterSpacing: 0.4,
        fontFamily: "Roboto"
      },
      Overline: {
        fontSize: "10px",
        fontWeight: "lighter",
        letterSpacing: 1.5,
        fontFamily: "Roboto"
      }
    };
    return styles[type];
  };
  _getStyles = () => {
    return {
      container: {
        ...this._getFontStyles()
      }
    };
  };
  render() {
    const styles = this._getStyles();
    return <text style={[styles.container]}>{this.props.children}</text>;
  }
}

export default withTheme(Radium(Text));
