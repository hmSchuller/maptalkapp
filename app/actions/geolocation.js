import * as types from './types'
import Api from '../lib/api'

export function getInitialLocation() {
    return (dispatch, getState) => {
      dispatch(startLocationRequest());
      return navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(finishInitialLocationRequest(regionFrom(position.coords.latitude, position.coords.longitude, position.coords.accuracy)));
        },
        (error) => {
          console.log(error);
        }
      );
    }
}

export function changeRegion(region) {
    return (dispatch, getState) => {
      dispatch(finishLocationRequest(region))
    }
  }

function startLocationRequest() {
  return {
    type: types.START_LOCATION_FETCH
  }
}

function finishLocationRequest(position) {
  return {
    type: types.FINISH_LOCATION_FETCH,
    position
  }
}

function finishInitialLocationRequest(position) {
  return {
    type: types.FINISH_INITIAL_LOCATION_FETCH,
    position
  }
}

function regionFrom(lat, lon, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
      latitude: lat,
      longitude: lon,
      // latitudeDelta: Math.max(0, latDelta)*10000,
      // longitudeDelta: Math.max(0, lonDelta)*10000,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
  }
