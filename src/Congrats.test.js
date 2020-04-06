import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import {findByTestAttr} from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props) => {
    return shallow(<Congrats {...props} />);
}

test('renderes without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is fake', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('')
});

test('renders non empty congrats message when `success` props is true', () => {
    const wrapper = setup({success: true});
    const component = findByTestAttr(wrapper, 'congrats-message');
    expect(component.text().length).not.toBe(0)
})