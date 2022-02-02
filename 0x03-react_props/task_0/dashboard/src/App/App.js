import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications'
import { getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <Notifications />
//     <Header />
//     <Login />
//     <Footer />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          <Login />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
