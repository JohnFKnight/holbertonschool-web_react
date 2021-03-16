import App from './App';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
const wrapper = shallow(<App />);
describe('<App />', () => {
    it('renders without crashing', () => {
      expect(wrapper.exists());
    });
    it('renders App-header div', () => {
      expect(wrapper.contains(<header className="App-header" />))
    });
    it('renders App-body div', () => {
      expect(wrapper.contains(<main className="App-body" />))
    });
    it('renders App-footer div', () => {
      expect(wrapper.contains(<footer className="App-header" />))
    });
});
// These also work but don't show as test counts
// expect(wrapper.find("div.App-header").length).toBe(1);
// expect(wrapper.find("div.App-body").length).toBe(1);
// expect(wrapper.find("div.App-footer").length).toBe(1);
