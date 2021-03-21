import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

import { messageMiddleware } from './messageMiddleware';
import { unreadMiddleware, delChatMiddleware } from './chatlistMiddleware';

export default [
    logger,
    apiMiddleware,
    messageMiddleware,
    unreadMiddleware,
    delChatMiddleware,
];