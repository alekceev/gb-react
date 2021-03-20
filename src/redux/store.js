import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';
import middlewares from './middlewares';

const initialState = {
    chat: {
        messages: {
            1: [{
                text: 'Hello from redux, enter command:',
                user: 'bot',
            }],
            2: [{
                text: 'Hello from redux, enter command:',
                user: 'bot',
            }]
        },
    },
    chats: {
        1 : { name: 'Chat 1'},
        2 : { name: 'Chat 2', unreaded: 1},
    },
    profile: {
        name: 'me',
    }
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chat', 'chats', 'profile'],
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            ...middlewares,
            routerMiddleware(history),
        )
    )
);

export const persistor = persistStore(store);

export { store };