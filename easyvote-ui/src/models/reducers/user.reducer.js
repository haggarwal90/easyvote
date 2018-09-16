import { fromJS } from 'immutable';
import userActions from 'models/actions/users';

const initialState = fromJS({
    users: fromJS([]),
});

/*
* @param {state} 
* @param {action}
*/
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case userActions.FETCH_USERS_COMPLETED:
            return state.set('users', payload);
        default:
            return state;
    }
}