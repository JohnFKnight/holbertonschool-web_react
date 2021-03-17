import Footer from './Footer';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
const wrapper = shallow(<Footer />);
describe('<App />', () => {
  it('renders without crashing', () => {
    expect(wrapper.exists());
  });
});
