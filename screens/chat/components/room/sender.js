import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import PropTypes from "prop-types";
import { isNull, isEmpty, trim } from "lodash";

export default class Sender extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };
  static defaultProps = {
    onSubmit: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this._input = React.createRef();
  }
  _onSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
    this._clear();
  };
  _clear = () => {
    this.setState({
      value: null
    });
    this._input.current.inputRef.value = null;
  };
  render() {
    return (
      <Input
        ref={this._input}
        placeholder="send something..."
        fluid
        onChange={(event, { value }) => {
          this.setState({
            value: isNull(trim(value)) || isEmpty(trim(value)) ? null : value
          });
        }}
        action={{
          icon: "send",
          color: "teal",
          disabled: this.state.value ? false : true,
          onClick: this._onSubmit
        }}
      />
    );
  }
}
