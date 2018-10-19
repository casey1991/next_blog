import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import { Colors } from "./Themes";

class Avatar extends Component {
  static propTypes = {
    message: PropTypes.object,
    size: PropTypes.number,
    color: PropTypes.string,
    src: PropTypes.string
  };
  static defaultProps = {
    size: 40,
    color: Colors.BACKGROUND,
    message: {},
    src: "/static/img/home_bg.jpg"
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <span
        style={[
          styles.containner,
          {
            width: this.props.size,
            height: this.props.size,
            background: `${this.props.color} no-repeat center  url(${
              this.props.src
            })`,
            backgroundSize: "cover"
          }
        ]}
      />
    );
  }
}
export default Radium(Avatar);
const styles = {
  containner: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: Colors.BACKGROUND
  }
};
