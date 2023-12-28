import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

//!======================== PropTypes ========================================================================

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
