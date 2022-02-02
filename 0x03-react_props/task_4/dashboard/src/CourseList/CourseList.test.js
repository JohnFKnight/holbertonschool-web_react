import CourseList from './CourseList';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
const wrapper = shallow(<CourseList />);
describe('CourseList', () => {
    it('renders without crashing', () => {
        expect(wrapper.exists());
    });

    it('should render 5 CourseListRows', () => {
        const rows = wrapper.find('CourseListRow')
        expect(rows.length).toBe(5);
    });
});
