export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const ADD_NEW_CHAT = '@@message/ADD_NEW_CHAT';

export const sendMessage = (text, user, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        user,
        chatId,
    }
});

export const AddNewChat = (name) => ({
    type: ADD_NEW_CHAT,
    payload: {
        name,
    },
});