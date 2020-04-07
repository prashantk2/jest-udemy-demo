import React from 'react';
import PropTypes from 'prop-types';

const GuessedWord = (props) => {
    let contents;
    if(props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the word
            </span>
        )
    } else {
        const guessedWordRow = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Word</h3>
                <table>
                    <thead>
                        <tr><th>Guess</th><th>Matching Letter</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordRow}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}

GuessedWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWord;