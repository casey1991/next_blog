import React, { Component } from "react";
import ggl from "graphql-tag";
import { Query } from "react-apollo";
const graphqlGGL = ggl`
  {
    goodss{
      id
      name
    }
  }
`;
export default class GoodsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={graphqlGGL}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <ul>
              {data.goodss.map(goods => {
                return <li key={goods.id}> {goods.name}</li>;
              })}
            </ul>
          );
        }}
      </Query>
    );
  }
}
