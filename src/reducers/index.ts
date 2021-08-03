import { combineReducers } from 'redux';
import playerGridReducer from './playerGrid';
import playerGridCompleteReducer from './playerGridComplete';

const allReducers = combineReducers({
  playerGridArray: playerGridReducer,
  playerGridComplete: playerGridCompleteReducer,
});
export default allReducers;
