import {ADD_NEW_CHAT, DEL_CHAT, SET_UNREADED} from '../actions/chatlistActions';

const initialState = {};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_CHAT: {
            // id выбираем исходя из кол-ва элементов в объекте.
            let id = Object.keys(state).length + 1;
            // при удалении и добавлении id могут совпадать, берём след-й
            while(true) {
                if (!state[id]) {
                    break;
                }
                id++;
            }
            return {
                ...state,
                [id]: {
                    name: action.payload.name
                },
            };
        }

        case SET_UNREADED: {
            const { chatId, cnt } = action.payload;
            // нет изменений, ничего не делаем
            if (!cnt && !state[chatId].unreaded) {
                return state;
            }

            return {
                ...state,
                [chatId]: {
                    ...state[chatId],
                    unreaded: cnt,
                },
            };
        }

        case DEL_CHAT: {
            const { chatId } = action.payload;
            // просо стираем инфу о чате из chats,
            // а удаление из сообщений повесим на middleware
            delete state[chatId];

            return {...state};
        }

        default:
            return state;
    }
};