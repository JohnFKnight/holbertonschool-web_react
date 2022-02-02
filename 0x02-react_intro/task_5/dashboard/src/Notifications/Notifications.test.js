import Notifications from './Notifications';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
const wrapper = shallow(<Notifications />);
describe('<Notifications />', () => {
    it('renders without crashing', () => {
        // shallow(<Notifications />);
        expect(wrapper.exist());
    });
    it('should render 3 <li>', () => {
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
    it('should render correct text', () => {
        expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    });
});

// These also work but don't show as test counts
// expect(wrapper.find('ul').children().length).toEqual(3);
// expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
