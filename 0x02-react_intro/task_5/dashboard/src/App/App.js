import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
        <footer className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    );
  }
}

export default App;