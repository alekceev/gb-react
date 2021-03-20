import logger from 'redux-logger';

import { messageMiddleware } from './messageMiddleware';
import { unreadMiddleware, delChatMiddleware } from './chatlistMiddleware';

export default [
    logger,
    messageMiddleware,
    unreadMiddleware,
    delChatMiddleware,
];