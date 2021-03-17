import Login from './Login';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
const wrapper = shallow(<Login />);
describe('<App />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists());
  });
  it('should render 2 <input>', () => {
    expect(wrapper.find('input').length).toEqual(2);
  });
  it('should render 2 <label>', () => {
    expect(wrapper.find('label').length).toEqual(2);
  });
});
