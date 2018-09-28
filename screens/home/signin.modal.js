import React from "react";
import { Modal } from "semantic-ui-react";
import Signin from "../../containers/graphql/Signin";

const SigninModal = props => (
  <Modal {...props}>
    <Signin />
  </Modal>
);

export default SigninModal;
