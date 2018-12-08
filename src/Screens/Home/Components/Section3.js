import React, { Component } from "react";
import Radium from "radium";
class Section3 extends Component {
  render() {
    return <div style={[styles.container]} />;
  }
}
const styles = {
  container: {
    padding: "100px 0px",
    backgroundColor: "#309"
  }
};
export default Radium(Section3);
