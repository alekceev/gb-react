import { SEND_MESSAGE, sendMessage } from '../actions/messageActions';

const answers = [
    {user: 'bot', text: 'Command not found'},
    {user: 'bot', text: 'Error command'}
];

export const messageMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            if (action.payload.user === 'me') {
                let answer = answers[ Math.floor(Math.random() * answers.length) ];
                setTimeout(() => {
                    store.dispatch(
                        sendMessage(answer.text, answer.user, action.payload.chatId)
                    );
                }, 1000);
            }
        }
    }

    return next(action);
};
