import React, { Component } from "react";
import Radium from "radium";

class Name extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { style } = this.props;
    const { message } = this.props;
    return <span style={[style, styles.containner]}>{message.user.name}</span>;
  }
}
export default Radium(Name);
const styles = {
  containner: {
    paddingTop: 4,
    paddingBottom: 4
  }
};
