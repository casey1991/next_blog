import PropTypes from "prop-types";
import { Constants } from "./Themes";
export const messageContentHelper = message => {};
export const UserShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOfType([
    Constants.STATUS_RECEIVED,
    Constants.STATUS_SENNDING,
    Constants.STATUS_VIEWED
  ])
});
export const RoomShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});
export const MessageShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  UserShape
});
