import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, checkProps} from '../test/testUtils';
import Congrats from './Congrats';

const defaultProps = {success: false};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />);
}

test('renderes without error', () => {
    const wrapper = setup({success: false});
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
});

test('does not throw error with expected props', () => {
    const expectedProps = {success: false};
    checkProps(Congrats, expectedProps)
})