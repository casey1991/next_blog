import React from "react";
import { withRouter } from "next/router";
import { compose, graphql } from "react-apollo";
import { Layout, Rooms, Room } from "../screens/chat";
import {
  QUERY_ROOMS,
  MUTATION_CREATE_MESSAGE,
  QUERY_MESSAGES
} from "../graphql";
class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  _renderGroups = () => {
    const { rooms } = this.props;
    return <Rooms rooms={rooms} />;
  };
  _renderRoom = () => {
    const { messages, createMessage } = this.props;
    return (
      <Room
        messages={messages}
        renderSender={() => (
          <Room.Sender
            onSubmit={value => {
              createMessage({
                variables: {
                  roomId: "5bc2bdc555270939e13d0716",
                  text: value,
                  type: 1
                },
                optimisticResponse: {
                  createMessage: {
                    id: -1,
                    text: value,
                    user: {
                      id: "5ba5023ed9a8324dcddfa078",
                      name: "casey",
                      __typename: "User"
                    },
                    status: "SENDING",
                    __typename: "Message"
                  }
                },
                update: (proxy, { data: { createMessage } }) => {
                  const data = proxy.readQuery({
                    query: QUERY_MESSAGES,
                    variables: {
                      roomId: "5bc2bdc555270939e13d0716"
                    }
                  });
                  data.messages.push(createMessage);
                  proxy.writeQuery({
                    query: QUERY_MESSAGES,
                    variables: {
                      roomId: "5bc2bdc555270939e13d0716"
                    },
                    data
                  });
                  console.log(data);
                }
              });
            }}
          />
        )}
      />
    );
  };
  render() {
    return (
      <Layout renderGroups={this._renderGroups} renderRoom={this._renderRoom} />
    );
  }
}

export default compose(
  graphql(MUTATION_CREATE_MESSAGE, {
    name: "createMessage"
  }),
  graphql(QUERY_MESSAGES, {
    options: {
      variables: {
        roomId: "5bc2bdc555270939e13d0716"
      }
    },
    props: ({ data }) => {
      return {
        messages: data.messages
      };
    }
  }),
  graphql(QUERY_ROOMS, {
    props: ({ data }) => {
      return {
        rooms: data.rooms
      };
    }
  }),
  withRouter
)(Chat);
