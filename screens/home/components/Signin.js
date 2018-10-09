import React, { Component } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions as AuthActions } from "../../../lib/redux/Auth/actions";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  render() {
    const { login } = this.props;
    const { email, password } = this.state;
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          login({ email, password });
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
const mapStateToProps = state => ({ token: state.auth.token });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: AuthActions.login
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
