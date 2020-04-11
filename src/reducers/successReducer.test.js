import {actionTypes} from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is dispactched', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});
test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, {types: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
})
