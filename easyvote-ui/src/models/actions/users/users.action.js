import userActions from './actions';

export const fetchUsers = () => {
    return function(dispatch) {
        fetch('http://localhost:5000/api/user')
            .then(response => response.json())
            .then(users=> dispatch({
                'type': userActions.FETCH_USERS_COMPLETED,
                'payload': users.data,
            }))
            .catch(error => {
                // TODO why this catch error from render block, disturb users state to reproduce 
                console.log('Error is ', error);
                dispatch({
                    'type': userActions.FETCH_USERS_FAILED,
                })
            })
    }
}