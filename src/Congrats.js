import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    if(props.success) {
        return (
            <div className="alert alert-success" data-test="component-congrats">
                <span data-test="congrats-message">
                    Congrats! You guessed right.
                </span>
            </div>
        )
    } else {
        return(
            <div data-test="component-congrats"/>
        )
    }
    
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats