import PropTypes from "prop-types";
export const messageContentHelper = message => {};
export const MessageShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
});
