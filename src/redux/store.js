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
    }
};

const store = createStore(reducers, initialState);

export { store };