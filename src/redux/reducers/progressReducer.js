

import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function progressReducer (state=initialState.progress, action ) {
  switch (action.type) {
    case actionTypes.GET_PROGRESS:
      return action.payload
    default:
      return state;
  }
}