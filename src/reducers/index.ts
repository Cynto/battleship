
import {combineReducers} from 'redux'
import playerGridReducer from './playerGrid'

const allReducers = combineReducers({
  playerGridArray: playerGridReducer
})
export default allReducers