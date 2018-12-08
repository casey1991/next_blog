import React, { Component } from "react";
import Radium from "radium";
class Container extends Component {
  render() {
    const { style, children } = this.props;
    return <div style={[styles.container, style]}>{children}</div>;
  }
}
const styles = {
  container: {
    "@media (min-width: 1160px)": {
      maxWidth: "1160px",
      margin: "0 auto"
    }
  }
};
export default Radium(Container);
