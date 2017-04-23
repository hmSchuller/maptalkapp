import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const markers = createReducer({data: []}, {
  [types.START_MESSAGE_REQUEST](state, action) {
    return Object.assign({}, state, {
      isFetching: true,
      data: []
    })
  },
  [types.FINISH_MESSAGE_REQUEST](state, action){
    return Object.assign({}, state, {
      isFetching: false,
      data: action.markers
    })
  }
});
