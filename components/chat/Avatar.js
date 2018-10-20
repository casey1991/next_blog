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
    return (
      <span
        style={[
          styles.containner,
          {
            width: this.props.size,
            height: this.props.size,
            backgroundSize: "cover",
            backgroundImage: `url(${this.props.src})`,
            backgroundColor: `${this.props.color}`,
            backgroundRepeat: "no-repeat",
            backgrounndPosition: "center"
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
    borderRadius: "50%"
  }
};
