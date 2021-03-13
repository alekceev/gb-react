import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    chat: {
        messages: {
            0: [{
                text: 'Hellow from redux',
                user: 'bot',
            }]
        }
    },
    chats: ['Chat 1', 'Chat 2', 'Chat 3'],
    profile: {
        name: 'me',
    }
};

const store = createStore(reducers, initialState);

export { store };