import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
const configureStore = (preloadedState={}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}

export default configureStore;