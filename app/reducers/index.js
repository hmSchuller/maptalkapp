import { combineReducers } from 'redux'
import * as messageReducer from './messages'
import * as geolocationReducer from './geolocation'

export default combineReducers(Object.assign(
    messageReducer,
    geolocationReducer,
));
