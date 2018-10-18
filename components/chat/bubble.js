import React, { Component } from "react";
import Radium from "radium";
import { isArray } from "lodash";

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
    padding: 10,
    backgroundColor: "#FACB0C",
    borderRadius: 4
  }
};
