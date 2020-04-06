import React from 'react';
// import { render } from '@testing-library/react';

import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Counter from './Counter'; 

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
 * Factory function to create shallowComponent for the App component
 * @function setup
 * @param {object} props -Props specific to this component
 * @param {any} state - Initial state of the setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<Counter {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with given data-test value
 * @function findBtTestAttr
 * @param {ShallowComponent} wrapper -Enzyme wrapper to search within
 * @param {string} val -Value of data-test attribute for search
 * @returns {ShallowComponent} 
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('Counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments the counter display', () => {
    const counter = 7;
    const wrapper = setup(null, {counter});
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1)
});

/**
 * Test cases for decrement counter
 */
test('render decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('clicking button decrement the counter', () => {
  const counter = 7;
  const wrapper = setup(null, {counter});
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);
})
