import { createStore, applyMiddleware, combineReducers } from 'redux';

/* Redux middlewares */
import thunkMiddleware from 'redux-thunk';

import users from './reducers/user.reducer';

export default () => {
    return createStore(combineReducers({
        users,
    }), 
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
    ));
}