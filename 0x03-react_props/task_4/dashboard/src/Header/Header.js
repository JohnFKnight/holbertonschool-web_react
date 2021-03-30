import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
    );
  }
}

export default Header;
