import App from './App';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

// configure({adapter: new Adapter()});
describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
});
