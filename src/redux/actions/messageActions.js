export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const DEL_MESSAGES = '@@message/DEL_MESSAGES';

export const sendMessage = (text, user, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        user,
        chatId,
    }
});

export const delMessages = (chatId) => ({
    type: DEL_MESSAGES,
    payload: {
        chatId,
    }
});