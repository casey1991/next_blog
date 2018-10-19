import React, { Component } from "react";
import Radium from "radium";
import { Colors, Dimensions } from "./Themes";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, style } = this.props;
    return <div style={[style, styles.containner]}>{children}</div>;
  }
}
export default Radium(Menu);
const styles = {
  containner: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
};
