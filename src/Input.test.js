import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, storeFactory} from '../test/testUtils'
import Input, {UnconnectedInput} from './Input';


const setUp = (initialState) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
}

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

describe('`guessWord` action creator call', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';
    beforeEach(() => {
        guessWordMock = jest.fn();
        const props = {
            guessWord: guessWordMock
        }
        wrapper = shallow(<UnconnectedInput {...props} /> );

        wrapper.setState({currentGuess: guessedWord});

        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', {preventDefault() {}});
    })

    test('`guessWord` ran on click of submit', () => {
        const guessWordMockCount = guessWordMock.mock.calls.length;
        expect(guessWordMockCount).toBe(1);
    });
    test('calls `guessWord` with input value as argument', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    })
})

