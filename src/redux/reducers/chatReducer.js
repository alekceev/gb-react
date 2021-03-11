import {SEND_MESSAGE, ADD_NEW_CHAT} from '../actions/messageActions';

const initialState = {};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...state.messages[action.payload.chatId] || [],
                        {
                            user: action.payload.user,
                            text: action.payload.text,
                        },
                    ],
                },
            }
        }
        case ADD_NEW_CHAT: {
            return {
                ...state,
                //TODO
            }
        }
        default:
            return state;
    }
};