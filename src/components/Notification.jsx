import PropTypes from 'prop-types';
import { Paragraph } from '../styles/notificationStyles';

export const Notification = ({ message }) => {
  return <Paragraph>{message}</Paragraph>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
