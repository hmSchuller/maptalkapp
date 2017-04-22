import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const markers = createReducer([], {
  [types.FINISH_MESSAGE_REQUEST](state, action){
      return action.markers
  }
});
