import React, { Component } from "react";
import ggl from "graphql-tag";
import { Button, Checkbox, Form } from "semantic-ui-react";
const goodsCreateGGL = ggl`
    mutation createGoods($name: String!, $price: Int!, $amount:Int!) {
        createGoods(name: $name, price: $price, amount: $amount) {
            id
            type
        }
    }
`;
export default class GoodsCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input placeholder="Last Name" type="number" />
        </Form.Field>
        <Form.Field>
          <label>Amount</label>
          <input placeholder="Last Name" type="number" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
