import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import TweetsReducer from './tweets_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    tweets: TweetsReducer

});

export default RootReducer;