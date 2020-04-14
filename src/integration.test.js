import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
    let secretWord = 'party';
    let unsuccessfulGuess = 'train';
    describe('no guessed words', () => {
        let store;
        let initialState = {secretWord};
        beforeEach(() => {
            store = storeFactory(initialState);  
        })
        test('updates state correctly for unsuccessfull guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            }
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successfull guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord:secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState);
        });
    });
    describe('some guessed words', () => {
        const guessedWords = [{guessedWord: 'agile', letterMatchCount: 1}];
        const initialState = {guessedWords, secretWord};
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsuccessfull guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
            }
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successfull guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success:true,
                guessedWords: [...guessedWords, {guessedWord:secretWord, letterMatchCount:5}]
            };
            expect(newState).toEqual(expectedState);
        });
    });
})