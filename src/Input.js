import React, {Component} from 'react';
import {connect} from 'react-redux';

import {guessWord} from './actions'

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGuess: null
        }
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
    }
    submitGuessedWord(evt) {
        evt.preventDefault();
        const guessedWord = this.state.currentGuess;
        if(guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord)
        }
    }
    render(){
        let content = this.props.success
            ? null
            : (
                <form className="form-inline">
                    <input
                        className="mb-2 mx-sm-3"
                        data-test="input-box"
                        type="text"
                        value={this.state.currentGuess}
                        onChange={(e) => this.setState({currentGuess: e.target.value})}
                        placeholder="Enter Guess"
                    />
                    <button
                        className="btn btn-primary mb-2"
                        data-test="submit-button"
                        onClick={() => this.props.guessWord('tain')}
                        type="submit">
                        Submit
                    </button>
                </form>
            )
        return (
            <div data-test="component-input">
                {content}
            </div>
        )
    }
}

const mapStateToProps = ({success}) => {
    return {success}
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput);