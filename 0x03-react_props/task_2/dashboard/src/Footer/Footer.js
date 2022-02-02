import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    );
  }
}

export default Footer;
