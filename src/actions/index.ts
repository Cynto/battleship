export const setPlayerGrid = (newArray: number[]) => {
  return {
    type: 'SET_PLAYER_GRID',
    payload: newArray,
  };
};
export const setAIGrid = (newArray: number[]) => {
  return {
    type: 'SET_AI_GRID',
    payload: newArray,
  };
};
export const setGridComplete = (bool: boolean) => {
  return {
    type: 'SET_GRID_COMPLETE',
    payload: bool,
  };
};
export const SetAIBoatArray = (newArray: any) => {
  return {
    type: 'SET_AI_BOAT_ARRAY',
    payload: newArray,
  };
};
export const setPlayerBoatArray = (newArray: any) => {
  return {
    type: 'SET_PLAYER_BOAT_ARRAY',
    payload: newArray,
  };
};
export const addPlayerBoatArray = (newArray: any) => {
  return {
    type: 'ADD_PLAYER_BOAT_ARRAY',
    payload: newArray,
  };
};
export const setPlayerTurn = (bool: boolean) => {
  return {
    type: 'SET_PLAYER_TURN',
    payload: bool,
  };
};
