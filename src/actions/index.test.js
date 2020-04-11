import {correctGuess, actionTypes} from './';

describe('correctGuess', () => {
    test('returns an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess();
        expect(action).toEqual({types: actionTypes.CORRECT_GUESS})
    })
})

