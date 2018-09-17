import { createStore } from 'redux';

console.log('111')

var reducer = function(state = 0, action) {
    switch(action.type) {
        case 'ADD':
            console.log('112');
            return action.data + 1;
        default:
            console.log('113');
            return state;
    }
}

console.log('114')

var store = createStore(reducer);

console.log('115')

store.dispatch({
    'type': 'ADD',
    'data': 3
})

const unsubscribe = store.subscribe(function() {
    console.log('116')
    try {
        console.log(store.getState());
    } catch(e) {
        console.log(e);
    }
})

unsubscribe();