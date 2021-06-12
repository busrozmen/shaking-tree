import * as progressActions from '../redux/actions/progressActions'
import * as isShakedActions from '../redux/actions/isShakedActions'
import * as types from '../redux/actions/actionTypes'

describe('progress actions', () => {
  it('should create an action to progress info', () => {
    const progress = false
    const expectedAction = {
      type: types.GET_PROGRESS,
      payload: progress
    }
    expect(progressActions.getProgress(progress)).toEqual(expectedAction)
})
})
describe('shaked actions', () => {
  it('should create an action to shaked info', () => {
    const shaked = false
    const expectedAction = {
      type: types.IS_SHAKED,
      payload: shaked
    }
    expect(isShakedActions.isShaked(shaked)).toEqual(expectedAction)
})
})