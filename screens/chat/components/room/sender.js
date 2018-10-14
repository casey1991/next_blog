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
    onSubmit(value);
    this._clear();
  };
  _clear = () => {
    this.setState({
      value: null
    });
  };
  render() {
    return (
      <Input
        ref={this._input}
        placeholder="send something..."
        fluid
        onChange={({ nativeEvent: { data } }) => {
          const value = trim(data);
          this.setState({
            value: isNull(value) || isEmpty(value) ? null : value
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
