import { RSAA, getJSON } from 'redux-api-middleware';

export const START_SEND_MESSAGE = '@@message/START_SEND_MESSAGE';
export const SEND_MESSAGE       = '@@message/SEND_MESSAGE';
export const ERROR_SEND_MESSAGE = '@@message/ERROR_SEND_MESSAGE';

export const START_DEL_MESSAGES = '@@message/START_DEL_MESSAGES';
export const DEL_MESSAGES       = '@@message/DEL_MESSAGES';
export const ERROR_DEL_MESSAGES = '@@message/ERROR_DEL_MESSAGES';

export const START_DEL_MESSAGE = '@@message/START_DEL_MESSAGE';
export const DEL_MESSAGE       = '@@message/DEL_MESSAGE';
export const ERROR_DEL_MESSAGE = '@@message/ERROR_DEL_MESSAGE';

export const START_MESSAGES_LOADING   = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING   = '@@message/ERROR_MESSAGES_LOADING';

export const sendMessage = (text, user, chatId) => ({
    [RSAA]: {
        endpoint: "http://localhost:3000/messages",
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            text,
            user,
            chatId
        }),
        types: [
            START_SEND_MESSAGE,
            {
                type: SEND_MESSAGE,
                payload: (action, state, res) => getJSON(res).then(data => data),
            },
            ERROR_SEND_MESSAGE,
        ]
    }
});

export const delMessage = (id, chatId) => ({
    [RSAA]: {
        endpoint: `http://localhost:3000/messages/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        types: [
            START_DEL_MESSAGE,
            {
                type: DEL_MESSAGE,
                payload: (action, state, res) => getJSON(res).then(data => ({id, chatId})),
            },
            ERROR_DEL_MESSAGE,
        ]
    }
});

export const delMessages = (chatId) => ({
    type: DEL_MESSAGES,
    payload: { chatId }
    // Не нужно делать, т.к. бэк сам удаляем зависимости
    // [RSAA]: {
    //     endpoint: `http://localhost:3000/messages?chatId=${chatId}`,
    //     method: 'DELETE',
    //     headers: { 'Content-Type': 'application/json' },
    //     types: [
    //         START_DEL_MESSAGES,
    //         {
    //             type: DEL_MESSAGES,
    //             payload: (action, state, res) => getJSON(res).then(data => ({chatId: chatId})),
    //         },
    //         ERROR_DEL_MESSAGES,
    //     ]
    // }
});

// приводим к старой структуре
const groupBy = (arr, key)  => {
    return (arr || []).reduce((row, x = {}) => ({
        ...row,
        [x[key]]: [...row[x[key]] || [], x]
    }), {});
};

export const loadMessages = (chatId) => {
    const url = chatId ? `http://localhost:3000/messages?chatId=${chatId}` : `http://localhost:3000/messages`;
    return {
        [RSAA]: {
            endpoint: url,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            types: [
                START_MESSAGES_LOADING,
                {
                    type: SUCCESS_MESSAGES_LOADING,
                    payload: (action, state, res) => getJSON(res).then(data => groupBy(data, 'chatId')),
                },
                ERROR_MESSAGES_LOADING,
            ]
        }
    };
};