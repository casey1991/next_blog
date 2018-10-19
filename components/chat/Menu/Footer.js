import React, { Component } from "react";
import Radium from "radium";
import { Colors, Dimensions } from "../Themes";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, style } = this.props;
    return <span style={[style, styles.containner]}>{children}</span>;
  }
}
export default Radium(Footer);
const styles = {
  containner: {}
};
