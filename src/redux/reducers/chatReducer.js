import {DEL_MESSAGES, SEND_MESSAGE} from '../actions/messageActions';

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

        case DEL_MESSAGES: {
            delete state.messages[action.payload.chatId];
            return {...state};
        }

        default:
            return state;
    }
};