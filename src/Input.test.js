import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, storeFactory} from '../test/testUtils'
import Input from './Input';


const setUp = (initialState) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
}
setUp();

describe('render', () => {
    describe('word has not been guessed', () => {
        test('render component without error', () => {

        });
        test('render input box', () => {

        });
        test('render submit button', () => {

        });
    });
    describe('word has been guessed', () => {
        test('render component without error', () => {

        });
        test('does not render input box', () => {

        });
        test('does not render submit button', () => {

        });
    })
});

describe('update state', () => {
    
});