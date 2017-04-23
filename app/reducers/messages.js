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

export const postMarker = createReducer({}, {
  [types.START_POST_REQUEST] (state, action) {
    return Object.assign({}, state, {
      inProgess: true
    });
  },
  [types.FINISH_POST_REQUEST] (state, action) {
    return Object.assign({}, state, {
      inProgess: false
    });
  },
});
