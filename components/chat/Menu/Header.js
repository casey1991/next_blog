import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { Colors, Dimensions } from "../Themes";

class Header extends Component {
  static propTypes = {
    onSearchChange: PropTypes.func
  };
  static defaultProps = {
    onSearchChange: () => {}
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { style, onSearchChange } = this.props;
    return (
      <div style={[style, styles.containner]}>
        <span style={[styles.title]}>CHAT</span>
        <input
          style={[styles.input]}
          onChange={({ nativeEvent }) => {
            const value = nativeEvent.target.value;
            onSearchChange(value);
          }}
        />
      </div>
    );
  }
}
export default Radium(Header);
const styles = {
  containner: {
    display: "flex",
    padding: Dimensions.COMMON_PADDING,
    flexDirection: "column"
  },
  title: {
    fontSize: 26,
    marginLeft: 20,
    marginRight: 20,
    color: "#FFF"
  },
  input: {
    display: "block",
    outlineStyle: "none",
    backgroundColor: Colors.PRIMARY_DARK,
    border: "none",
    margin: Dimensions.COMMON_MARGINN + 10,
    height: 40,
    borderRadius: Dimensions.COMMON_RADIUS,
    padding: 10,
    color: "#FFF"
  }
};
