import { combineReducers } from 'redux';
import clickReducer from './clickReducer';

const rootReducer = combineReducers({ click: clickReducer });

export default rootReducer;
