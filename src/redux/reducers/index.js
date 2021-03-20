import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { chatReducer } from './chatReducer';
import { chatsReducer } from './chatsReducer';
import { profileReducer } from './profileReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    chat: chatReducer,
    chats: chatsReducer,
    profile: profileReducer,
});