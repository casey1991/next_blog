import React, { Component } from "react";
import Radium from "radium";
class Footer extends Component {
  render() {
    return <div style={[styles.container]} />;
  }
}
const styles = {
  container: {
    padding: "80px 0px",
    backgroundColor: "#311"
  }
};
export default Radium(Footer);
