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
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false};
            wrapper = setUp(initialState);
        })
        test('render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success:true};
            wrapper = setUp(initialState);
        })
        test('render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).not.toBe(1);
        });
        test('does not render submit button', () => {
            const searchButton = findByTestAttr(wrapper, 'search-button');
            expect(searchButton.length).not.toBe(1);
        });
    })
});

describe('redux props', () => {
    test('has success piece of code as the props', () => {
        const success = true;
        const wrapper = setUp({success});
        const successProps = wrapper.instance().props.success;
        expect(successProps).toBe(success);
    });
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setUp();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function)
    })
});