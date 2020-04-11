import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { createStore,applyMiddleware } from 'redux';
import {middlewares} from '../src/configureStore'

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
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