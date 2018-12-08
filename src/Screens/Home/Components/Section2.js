import React, { Component } from "react";
import Radium from "radium";
class Section2 extends Component {
  render() {
    return <div style={[styles.container]} />;
  }
}
const styles = {
  container: {
    padding: "100px 0px",
    backgroundColor: "#307"
  }
};
export default Radium(Section2);
