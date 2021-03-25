import { RSAA, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { chats } from '../utils/schemas';

export const START_NEW_CHAT = '@@chatlist/START_NEW_CHAT';
export const ADD_NEW_CHAT = '@@chatlist/ADD_NEW_CHAT';
export const ERROR_NEW_CHAT = '@@chatlist/ERROR_NEW_CHAT';

export const SET_UNREADED = '@@chatlist/SET_UNREADED';

export const START_DEL_CHAT = '@@chatlist/START_DEL_CHAT';
export const DEL_CHAT = '@@chatlist/DEL_CHAT';
export const ERROR_DEL_CHAT = '@@chatlist/ERROR_DEL_CHAT';

export const START_CHATS_LOADING = '@@chatlist/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chatlist/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chatlist/ERROR_CHATS_LOADING';

export const addNewChat = (name) => ({
    [RSAA]: {
        endpoint: "http://localhost:3000/chats",
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name
        }),
        types: [
            START_NEW_CHAT,
            {
                type: ADD_NEW_CHAT,
                payload: (action, state, res) => getJSON(res).then(data => data),
            },
            ERROR_NEW_CHAT,
        ]
    }
});

export const setUnreaded = (chatId, cnt) => ({
    type: SET_UNREADED,
    payload: {
        chatId,
        cnt,
    },
});

export const delChat = (chatId) => ({
    [RSAA]: {
        endpoint: `http://localhost:3000/chats/${chatId}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        types: [
            START_DEL_CHAT,
            {
                type: DEL_CHAT,
                payload: (action, state, res) => getJSON(res).then(data => ({chatId: chatId})),
            },
            ERROR_DEL_CHAT,
        ]
    }
});

export const loadChats = () => ({
    [RSAA]: {
        endpoint: "http://localhost:3000/chats",
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res).then(data => normalize(data, [chats])),
            },
            ERROR_CHATS_LOADING,
        ]
    }
});