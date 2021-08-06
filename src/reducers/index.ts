import { combineReducers } from 'redux';
import AIGridReducer from './AIGrid';
import playerGridReducer from './playerGrid';
import playerGridCompleteReducer from './playerGridComplete';

const allReducers = combineReducers({
  playerGridArray: playerGridReducer,
  playerGridComplete: playerGridCompleteReducer,
  AIGrid: AIGridReducer,
});
export default allReducers;
