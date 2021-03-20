import { SEND_MESSAGE, delMessages } from '../actions/messageActions';
import { setUnreaded, DEL_CHAT } from '../actions/chatlistActions';

export const unreadMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            if (action.payload.user !== 'me') {
                const state = store.getState();
                const {chatId} = action.payload;

                let paths = state.router.location.pathname.split('/');
                let id = parseInt( paths[paths.length-1] );
                // другой чат, увеличим счётчик непрочитанных
                if (chatId != id) {
                    // console.log(' add unreaded message to', chatId);
                    store.dispatch(
                        setUnreaded(chatId, (state.chats[chatId].unreaded || 0) + 1),
                    );
                }
            }
        }
    }

    return next(action);
};

export const delChatMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case DEL_CHAT: {
            // словили удаление чата и стразу инициируем событие на удаление сообщений
            store.dispatch(
                delMessages(action.payload.chatId)
            );
        }
    }

    return next(action);
};