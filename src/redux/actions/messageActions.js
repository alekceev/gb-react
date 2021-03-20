export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (text, user, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        user,
        chatId,
    }
});
