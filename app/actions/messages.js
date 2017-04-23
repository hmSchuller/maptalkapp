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

export function postMarker(marker) {
  return (dispatch, getState) => {
    dispatch(startPostRequest());
    Api.post('messages/', marker).then(resp => {
      console.log(resp);
      dispatch(finishPostRequest());
    }).catch(error => {
      console.log(error);
    })
  }
}

function startPostRequest() {
  return {
    type: types.START_POST_REQUEST
  }
}

function finishPostRequest() {
  return {
    type: types.FINISH_POST_REQUEST
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
