import progressReducer from '../redux/reducers/progressReducer'
import isShakedReducer from '../redux/reducers/isShakedReducer'
import {initialState} from '../redux/reducers/initialState'

describe('progress reducer', () => {
  it('should return the initial state', () => {
    expect(progressReducer(undefined, {})).toMatchSnapshot()
  })
  it('shold handle GET_PROGRESS', () => {
    expect(progressReducer(initialState, 
      {
        type:'GET_PROGRESS'
      })
    ).toMatchSnapshot()
  })
})
describe('shaked reducer', () => {
  it('should return the initial state', () => {
    expect(isShakedReducer(undefined, {})).toMatchSnapshot()
  })
  it('shold handle IS_SHAKED', () => {
    expect(isShakedReducer(initialState, 
      {
        type:'IS_SHAKED'
      })
    ).toMatchSnapshot()
  })
});