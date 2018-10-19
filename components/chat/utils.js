import PropTypes from "prop-types";
export const messageContentHelper = message => {};
export const UserShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});
export const RoomShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});
export const MessageShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  UserShape
});
