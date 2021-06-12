import * as actionTypes from './actionTypes'

export function isShaked(shake) {
  return {
    type: actionTypes.IS_SHAKED,
    payload: shake
  }
}
