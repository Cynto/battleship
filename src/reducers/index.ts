import { combineReducers } from 'redux';
import AIGridReducer from './AIGrid';
import playerGridReducer from './playerGrid';
import playerGridCompleteReducer from './playerGridComplete';
import AIBoatReducer from './AIBoatLocation';

const allReducers = combineReducers({
  playerGridArray: playerGridReducer,
  playerGridComplete: playerGridCompleteReducer,
  AIGrid: AIGridReducer,
  AIBoatArray: AIBoatReducer,
});
export default allReducers;
