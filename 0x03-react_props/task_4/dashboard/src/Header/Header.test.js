import Header from './Header';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
const wrapper = shallow(<Header />);
describe('<Header />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists());
  });
  it('should render <img>', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
  it('should render <h1>', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
});
