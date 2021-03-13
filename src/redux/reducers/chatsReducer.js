import {ADD_NEW_CHAT} from '../actions/chatlistActions';

const initialState = {};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_CHAT: {
            return [
                ...state,
                action.payload.name
            ]
        }
        default:
            return state;
    }
};