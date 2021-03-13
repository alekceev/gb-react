export const ADD_NEW_CHAT = '@@chatlist/ADD_NEW_CHAT';

export const addNewChat = (name) => ({
    type: ADD_NEW_CHAT,
    payload: {
        name,
    },
});