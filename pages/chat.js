import React from "react";
import { withRouter } from "next/router";
import { compose, graphql } from "react-apollo";
import { hasIn } from "lodash";
import { Chat as BBChat } from "../components/chat";
import {
  QUERY_ROOMS,
  MUTATION_CREATE_MESSAGE,
  QUERY_MESSAGES,
  SUBSCRIPTION_MESSAGE_CREATED
} from "../graphql";
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: props.selectedRoom,
      subscribeMessageCreated: null
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.loadingMessages) {
      console.log(prevState, "hei", SUBSCRIPTION_MESSAGE_CREATED);
      // Check for existing subscription
      if (prevState.subscribeMessageCreated) {
        // Only unsubscribe/update state if subscription variable has changed
        if (prevState.selectedRoom === nextProps.selectedRoom) {
          return null;
        }
        prevState.subscribeMessageCreated();
      }

      return {
        // Subscribe
        subscribeMessageCreated: nextProps.subscribeMessages({
          document: SUBSCRIPTION_MESSAGE_CREATED,
          variables: {
            roomId: nextProps.selectedRoom
          },
          updateQuery: (previousResult, { subscriptionData, variables }) => {
            // Perform updates on previousResult with subscriptionData
            return updatedResult;
          }
        }),
        // Store subscriptionParam in state for next update
        selectedRoom: nextProps.selectedRoom
      };
    }

    return null;
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
  _renderRooms = () => {
    const { rooms } = this.props;
    const { selectedRoom } = this.state;
    return (
      <BBChat.Rooms
        rooms={rooms}
        selectedRoom={selectedRoom}
        onItemClick={id => {
          this.setState({ selectedRoom: id }, () => {
            loadMessages({ roomId: this.state.selectedRoom });
          });
        }}
      />
    );
  };
  _renderActionBar = () => {
    const { _onSend } = this;
    return (
      <BBChat.ActionBar
        renderSender={() => (
          <BBChat.Sender
            onSend={value => {
              _onSend(value);
            }}
          />
        )}
      />
    );
  };
  render() {
    const { messages } = this.props;
    return (
      <BBChat
        messages={messages}
        renderRooms={this._renderRooms}
        renderActionBar={this._renderActionBar}
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
        messages: data.messages,
        subscribeMessages: data.subscribeToMore,
        loadingMessages: data.loading
      };
    }
  }),
  graphql(MUTATION_CREATE_MESSAGE, {
    name: "createMessage"
  })
)(Chat);
