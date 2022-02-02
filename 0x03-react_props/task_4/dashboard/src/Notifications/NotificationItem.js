import React from 'react';
import PropTypes from 'prop-types';
import { html } from 'cheerio';
// import './Notifications.css';

function NotificationItem(props) {
  const value = props.value;
  const type = props.type;
  const html = props.html;
  // return (
  // <li value={value} data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
  if (html !== undefined) {
    return (
      // <li value={value} data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
      <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
    );
  }
  return (<li data-notification-type={type}>{value}</li>)
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.object,
  __html: PropTypes.string.objectOf(html)
}

export default NotificationItem;
