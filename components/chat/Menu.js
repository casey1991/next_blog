import React, { Component } from "react";
import Radium from "radium";
import { Colors, Dimensions } from "./Themes";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, style } = this.props;
    return <span style={[style, styles.containner]}>{children}</span>;
  }
}
export default Radium(Menu);
const styles = {
  containner: {
    padding: Dimensions.COMMON_PADDING,
    backgroundColor: Colors.PRIMARY,
    borderRadius: Dimensions.COMMON_RADIUS
  }
};
