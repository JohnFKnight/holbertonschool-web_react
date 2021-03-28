import closeIcon from '../assets/close-icon.png';
import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  render() {
    return (
      <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <ul>
          {/* <NotificationItem type="default" value="test" html="New course available" />
          <NotificationItem type="urgent" value="test" html="New resume available" /> */}
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={getLatestNotification()} />
        </ul>
        <div>
          <button
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 15,
              right: 10,
              // backgroundColor: 'white',
              visibility: 'hidden',
              border: 'none',
              // outline: 'none',
              cursor: 'pointer',
            }}
            onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} alt="close-icon"
              style={{
                height: 15,
                visibility: 'visible',
              }} />
          </button>
        </div>
      </div>
    );
  }
}


export default Notifications;