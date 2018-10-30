import React, { Component } from "react";
import Radium from "radium";

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={[styles.container]}>
        <h1 style={[styles.title]}>Spacing methods</h1>
        <h2 style={[styles.description]}>
          Spacing methods use baseline grids, keylines, padding, and incremental
          spacing to affect ratios, containers, and touch targets.
        </h2>
      </div>
    );
  }
}
export default Radium(Article);

const styles = {
  container: {
    paddingTop: 120
  },
  title: {
    fontSize: 40,
    "@media screen and (min-width:1024px)": {
      fontSize: 64
    }
  },
  description: {
    fontSize: 18,
    color: "#333"
  }
};
