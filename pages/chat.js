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
    const firstRoom = props.rooms[0];
    this.state = {
      room: firstRoom ? firstRoom.id : null
    };
  }
  _renderGroups = () => {
    const { rooms, loadMessages } = this.props;
    return (
      <Rooms
        rooms={rooms}
        onItemClick={room => {
          this.setState(
            {
              room: room
            },
            () => {
              loadMessages({ roomId: this.state.room });
            }
          );
        }}
      />
    );
  };
  _renderRoom = () => {
    const { messages, createMessage } = this.props;
    const { room } = this.state;
    return (
      <Room
        messages={messages}
        renderSender={() => (
          <Room.Sender
            onSubmit={value => {
              createMessage({
                variables: {
                  roomId: room,
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
                      roomId: room
                    }
                  });
                  data.messages.push(createMessage);
                  proxy.writeQuery({
                    query: QUERY_MESSAGES,
                    variables: {
                      roomId: room
                    },
                    data
                  });
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
  withRouter,
  graphql(QUERY_ROOMS, {
    props: ({ data }) => {
      return {
        rooms: data.rooms
      };
    }
  }),
  graphql(QUERY_MESSAGES, {
    options: ({ rooms }) => {
      const firstRoom = rooms[0];
      return {
        variables: {
          roomId: firstRoom ? firstRoom.id : null
        }
      };
    },
    props: ({ data }) => {
      return {
        loadMessages: data.refetch,
        messages: data.messages
      };
    }
  }),
  graphql(MUTATION_CREATE_MESSAGE, {
    name: "createMessage"
  })
)(Chat);
