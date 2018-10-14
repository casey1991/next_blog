import React, { Component } from "react";
import { Container, Header, Input } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class Sender extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };
  static defaultProps = {
    onSubmit: () => {}
  };
  constructor(props) {
    super(props);
    this._input = React.createRef();
  }
  _onSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit(this._input.current.inputRef.value);
  };
  render() {
    return (
      <Input
        ref={this._input}
        placeholder="send something..."
        fluid
        action={{
          icon: "send",
          color: "teal",
          onClick: this._onSubmit
        }}
      />
    );
  }
}
