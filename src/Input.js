import React, {Component} from 'react';
import {connect} from 'react-redux';

import {guessWord} from './actions'

class Input extends Component {
    render(){
        let content = this.props.success 
            ? null
            : (
                <form className="form-inline">
                    <input
                        className="mb-2 mx-sm-3"
                        data-test="input-box"
                        type="text"
                        placeholder="Enter Guess"
                    />
                    <button
                        className=""
                        data-test="submit-button"
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

export default connect(mapStateToProps, {guessWord})(Input);