import { combineReducers } from 'redux'
import * as messageReducer from './messages'

export default combineReducers(Object.assign(
    messageReducer,
));
