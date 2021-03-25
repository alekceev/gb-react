import {omit} from 'lodash';
import {
    DEL_MESSAGES, SEND_MESSAGE, DEL_MESSAGE,
    START_MESSAGES_LOADING, SUCCESS_MESSAGES_LOADING, ERROR_MESSAGES_LOADING,
} from '../actions/messageActions';

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
                            ...action.payload
                        },
                    ],
                },
            }
        }

        case DEL_MESSAGE: {
            let messages = [];
            state.messages[action.payload.chatId].forEach(m => {
                if (m.id != action.payload.id) {
                    messages.push(m);
                }
            });

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: messages,
                },
            }
        }

        case DEL_MESSAGES: {
            return {
                ...state,
                messages: omit(state.messages, [action.payload.chatId])
            };
        }

        case START_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case ERROR_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: false,
            };
        }

        case SUCCESS_MESSAGES_LOADING: {
            // console.log('LOADING:', action.payload);
            return {
                ...state,
                isLoading: false,
                messages: action.payload,
            };
        }

        default:
            return state;
    }
};