import {combineReducers} from 'redux'
import {chatReducer} from './chatReducer';
import {chatsReducer} from './chatsReducer';
import {profileReducer} from './profileReducer';

export default combineReducers({
    chat: chatReducer,
    chats: chatsReducer,
    profile: profileReducer,
});