import {actionTypes} from '../actions'

export default (state=false, action) => {
    switch(action.types) {
        case actionTypes.CORRECT_GUESS:
            return true;
        default:
            return state;
    }
}