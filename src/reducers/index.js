import { combineReducers } from 'redux';
import users from './users';
import logs from './logs';
import log from './log';
import countdown from './countdown';

export default combineReducers({ users, logs, log, countdown });
