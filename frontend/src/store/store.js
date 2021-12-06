import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

//applying the middleware allows us to view our state in the console window whenever we dispatch a new action to the store. 
//The ability to configure our store with a preloaded state will come in handy in the next section, allowing us to authenticate users 
//who are already logged in when they revisit our site.
const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer, preloadedState, applyMiddleware(thunk, logger)
    )
)

export default configureStore;