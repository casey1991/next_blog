import React from "react";
import { withRouter } from "next/router";
import { compose, graphql } from "react-apollo";
import { hasIn } from "lodash";
import { Chat as BBChat } from "../components/chat";
import {
  QUERY_ROOMS,
  MUTATION_CREATE_MESSAGE,
  QUERY_MESSAGES
} from "../graphql";
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: props.selectedRoom
    };
  }
  /**
   * actions
   */
  _onSend = value => {
    const { createMessage } = this.props;
    const { selectedRoom } = this.state;
    createMessage({
      variables: {
        roomId: selectedRoom,
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
            roomId: selectedRoom
          }
        });
        data.messages.push(createMessage);
        proxy.writeQuery({
          query: QUERY_MESSAGES,
          variables: {
            roomId: selectedRoom
          },
          data
        });
      }
    });
  };
  /**
   * sub renders
   */
  _renderGroups = () => {
    const { rooms, loadMessages } = this.props;
    return (
      <Rooms
        rooms={rooms}
        onItemClick={room => {
          this.setState(
            {
              selectedRoom: room
            },
            () => {
              loadMessages({ roomId: this.state.selectedRoom });
            }
          );
        }}
      />
    );
  };
  _renderRoom = () => {
    const { messages } = this.props;
    const {} = this.state;
    return (
      <Room
        messages={messages}
        renderSender={() => <Room.Sender onSubmit={this._onSend} />}
      />
    );
  };
  render() {
    const { messages, rooms, loadMessages } = this.props;
    const { selectedRoom } = this.state;
    const { _onSend } = this;
    return (
      <BBChat
        messages={messages}
        renderRooms={() => (
          <BBChat.Rooms
            rooms={rooms}
            selectedRoom={selectedRoom}
            onItemClick={id => {
              this.setState({ selectedRoom: id }, () => {
                loadMessages({ roomId: this.state.selectedRoom });
              });
            }}
          />
        )}
        renderActionBar={() => (
          <BBChat.ActionBar
            renderSender={() => (
              <BBChat.Sender
                onSend={value => {
                  _onSend(value);
                }}
              />
            )}
          />
        )}
      />
    );
  }
}

export default compose(
  withRouter,
  graphql(QUERY_ROOMS, {
    props: ({ data }) => {
      return {
        rooms: data.rooms,
        selectedRoom: hasIn(data, "rooms[0].id") ? data.rooms[0].id : null
      };
    }
  }),
  graphql(QUERY_MESSAGES, {
    options: ({ selectedRoom }) => {
      return {
        variables: {
          roomId: selectedRoom
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
