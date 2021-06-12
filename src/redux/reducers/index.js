import {combineReducers} from 'redux'
import isShakedReducer from './isShakedReducer'
import progressReducer from './progressReducer'

const rootReducer = combineReducers({
  isShakedReducer,
  progressReducer
})

export default rootReducer;