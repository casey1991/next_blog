import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";

class Avatar extends Component {
  static propTypes = {
    message: PropTypes.object
  };
  static defaultProps = {
    message: {}
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return <span style={[styles.containner]}>{children}</span>;
  }
}
export default Radium(Avatar);
const styles = {
  containner: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#999"
  }
};
