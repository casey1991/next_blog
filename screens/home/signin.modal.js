import React from "react";
import { Modal } from "semantic-ui-react";
import Signin from "../../containers/graphql/Signin";

const SigninModal = props => (
  <Modal {...props}>
    <Modal.Header>Sign in</Modal.Header>
    <Modal.Content>
      <Signin />
    </Modal.Content>
  </Modal>
);

export default SigninModal;
