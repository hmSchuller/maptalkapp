import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const location = createReducer({}, {
  [types.START_LOCATION_FETCH](state, action) {
    return Object.assign({}, state, {
      isFetching: true
    })
  },
  [types.FINISH_LOCATION_FETCH](state, action) {
    return Object.assign({}, state, {
      position: action.position,
    })
  },
  [types.FINISH_INITIAL_LOCATION_FETCH](state, action) {
    return Object.assign({}, state, {
      isFetching: false,
      initialPosition: action.initialPosition,
    })
  },
});
