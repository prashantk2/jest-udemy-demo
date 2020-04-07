import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from '../test/testUtils';

import GuessedWord from './GuessedWord';


const defaultProps = { guessedWords:{guessedWord:'train', letterMatchCount: 3} }

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWord  {...setupProps} />)
};

test('does not throw warning with the expected props', () => {
    checkProps(GuessedWord, defaultProps);
});

describe('if there are no words left', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    });
    test('render without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('render instruction to guess the word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words gussed', () => {
    
})