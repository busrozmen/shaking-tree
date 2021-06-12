
import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function isShakedReducer ( state=initialState.isShaked, action ) {
  switch (action.type) {
    case actionTypes.IS_SHAKED:
      return action.payload
    default:
      return state;
  }
}