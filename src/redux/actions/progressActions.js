import * as actionTypes from './actionTypes'

export function getProgress(pr) {
  return {
    type: actionTypes.GET_PROGRESS,
    payload: pr
  }
}
