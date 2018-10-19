import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { Colors, Dimensions } from "./Themes";
// components
import Sender from "./Sender";

class ActionBar extends Component {
  static propTypes = {
    renderSender: PropTypes.func
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { style, renderSender } = this.props;
    return (
      <div style={[style, styles.containner]}>
        {renderSender ? renderSender() : <Sender />}
      </div>
    );
  }
}
export default Radium(ActionBar);
const styles = {
  containner: {
    backgroundColor: "#FFF"
  }
};
