import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { createStore } from 'redux';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState)
}


export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propsError = checkPropTypes(
        component.prototype, 
        conformingProps, 
        'prop', 
        component.name
        );
        expect(propsError).toBeUndefined();
}