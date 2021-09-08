import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    contacts: [],
    user: 'AMAAAAAAAAAAAAAAAAAAAn',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACTS':
            return { ...state, contacts: action.payload.contacts };
        case 'POST_CONTACTS':
            return { ...state, contacts: action.payload.contacts };
        case 'DELETE_CONTACTS':
            return { ...state, contacts: action.payload.contacts };
        case 'PUT_CONTACTS':
            return { ...state, contacts: action.payload.contacts };
        default:
            return state;
    }
};

// const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
