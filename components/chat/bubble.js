import React, { Component } from "react";
import Radium from "radium";
import { Colors, Dimensions } from "./Themes";

class Bubble extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, style } = this.props;
    return <span style={[style, styles.containner]}>{children}</span>;
  }
}
export default Radium(Bubble);
const styles = {
  containner: {
    padding: Dimensions.COMMON_PADDING,
    backgroundColor: Colors.BACKGROUND,
    borderRadius: Dimensions.COMMON_RADIUS
  }
};
