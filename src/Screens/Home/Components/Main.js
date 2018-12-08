import React, { Component } from "react";
import Radium from "radium";
class Main extends Component {
  render() {
    return <div style={[styles.container]} />;
  }
}
const styles = {
  container: {
    padding: "100px 0px",
    backgroundColor: "#303"
  }
};
export default Radium(Main);
