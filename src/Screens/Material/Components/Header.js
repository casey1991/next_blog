import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import Color from "color";
import {
  withTheme,
  themeShape,
  defaultThemeShape,
  Text
} from "../../../Components";

class Header extends Component {
  static propTypes = {
    theme: PropTypes.shape(themeShape)
  };
  static defaultProps = {
    theme: defaultThemeShape
  };
  constructor(props) {
    super(props);
  }
  _getBackgroundColor = () => {
    const {
      theme: { Colors }
    } = this.props;
    return Color(Colors.Primary);
  };
  _getStyles = () => {
    const bgColor = this._getBackgroundColor();
    return {
      container: {
        height: 112,
        top: 0,
        left: 0,
        right: 0,
        position: "fixed",
        backgroundColor: bgColor,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.5)",
        zIndex: 4,
        "@media (min-width:599px)": {
          height: 72
        }
      }
    };
  };
  render() {
    const styles = this._getStyles();
    const bgColor = this._getBackgroundColor();
    return (
      <header style={[styles.container]}>
        {/* content */}
        <Text type="H6" inverted={bgColor.isDark() ? true : false}>
          Header
        </Text>
      </header>
    );
  }
}
export default withTheme(Radium(Header));
