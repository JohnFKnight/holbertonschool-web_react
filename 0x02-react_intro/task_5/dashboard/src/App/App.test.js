import App from './App';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
const wrapper = shallow(<App />);
it('renders without crashing', () => {
    shallow(<App />);
});
it('renders a div with the class App-header', () => {
    expect(wrapper.find("div.App-header").length).toBe(1);
});
it('renders a div with the class App-body', () => {
    expect(wrapper.find("div.App-body").length).toBe(1);
});
it('renders a div with the class App-footer', () => {
    expect(wrapper.find("div.App-footer").length).toBe(1);
});

// These also work but don't show as test counts
// expect(wrapper.find("div.App-header").length).toBe(1);
// expect(wrapper.find("div.App-body").length).toBe(1);
// expect(wrapper.find("div.App-footer").length).toBe(1);
