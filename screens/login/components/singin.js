import React, { Component } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class Signin extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };
  static defaultProps = {
    onSubmit: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  render() {
    const { onSubmit } = this.props;
    const { email, password } = this.state;
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({ email, password });
        }}
      >
        <Form.Field>
          <label>Email</label>
          <Input
            placeholder="example@example.com"
            type="email"
            onChange={(e, { value }) => {
              this.setState({ email: value });
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            placeholder="******"
            type="password"
            onChange={(e, { value }) => {
              this.setState({ password: value });
            }}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    );
  }
}
