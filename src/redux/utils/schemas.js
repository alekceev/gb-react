import { schema } from 'normalizr';

export const chats = new schema.Entity('chats');
export const messages = [ new schema.Entity('messages') ];
