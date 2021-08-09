import { combineReducers } from 'redux';
import AIGridReducer from './AIGrid';
import playerGridReducer from './playerGrid';
import playerGridCompleteReducer from './playerGridComplete';
import AIBoatReducer from './AIBoatLocation';
import playerTurnReducer from './playerTurn';
import playerBoatReducer from './playerBoatLocation';

const allReducers = combineReducers({
  playerGridArray: playerGridReducer,
  playerGridComplete: playerGridCompleteReducer,
  AIGrid: AIGridReducer,
  AIBoatArray: AIBoatReducer,
  playerTurn: playerTurnReducer,
  playerBoatArray: playerBoatReducer
});
export default allReducers;
