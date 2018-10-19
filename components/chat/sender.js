import React, { Component } from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { Colors, Dimensions } from "./Themes";

class Sender extends Component {
  static propTypes = {
    onSend: PropTypes.func
  };
  static defaultProps = {
    onSend: () => {}
  };
  constructor(props) {
    super(props);
    this._input = React.createRef();
  }
  _onSend = () => {
    const { onSend } = this.props;
    const value = this._input.current.value;
    onSend(value);
    this._input.current.value = "";
  };
  render() {
    const { style, onSend } = this.props;
    const { _onSend } = this;
    return (
      <div style={[style, styles.containner]}>
        <div style={[styles.composer]}>
          <input style={[styles.input]} ref={this._input} />
          <button style={[styles.button]} onClick={_onSend}>
            Send
          </button>
        </div>
      </div>
    );
  }
}
export default Radium(Sender);
const styles = {
  containner: {
    backgroundColor: "#FFF"
  },
  composer: {
    display: "flex",
    flexDirection: "row",
    margin: 6,
    border: "1px solid #eee"
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    outlineStyle: "none",
    height: 40,
    border: "none"
  },
  button: {
    border: 0,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    outlineStyle: "none",
    height: 40,
    backgroundColor: Colors.PRIMARY,
    color: "#FFF"
  }
};
