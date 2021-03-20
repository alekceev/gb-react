export const ADD_NEW_CHAT = '@@chatlist/ADD_NEW_CHAT';
export const SET_UNREADED = '@@chatlist/SET_UNREADED';
export const DEL_CHAT = '@@chatlist/DEL_CHAT';

export const addNewChat = (name) => ({
    type: ADD_NEW_CHAT,
    payload: {
        name,
    },
});

export const setUnreaded = (chatId, cnt) => ({
    type: SET_UNREADED,
    payload: {
        chatId,
        cnt,
    },
});

export const delChat = (chatId) => ({
    type: DEL_CHAT,
    payload: {
        chatId,
    },
});