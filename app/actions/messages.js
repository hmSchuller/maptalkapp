import * as types from './types'
import Api from '../lib/api'

export function fetchMessages(position) {
    return (dispatch, getState) => {
      dispatch(startRequest());
      Api.get(`messages?lat=${position.latitude}&lng=${position.longitude}&m=${20000}`).then(resp => {
        dispatch(finishRequest(resp.data))
      }).catch((error) => {
        dispatch(finishRequest([]));
      })
    }
}


function startRequest() {
  return {
    type: types.START_MESSAGE_REQUEST,
  }
}

function finishRequest(data) {
  return {
    type: types.FINISH_MESSAGE_REQUEST,
    markers: data
  }
}
