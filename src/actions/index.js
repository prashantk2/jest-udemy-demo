export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS'
};

export function correctGuess() {
    return {types: actionTypes.CORRECT_GUESS};
}