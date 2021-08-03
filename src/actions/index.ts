export const setPlayerGrid = (newArray: number[]) => {
  return {
    type: 'SET_PLAYER_GRID',
    payload: newArray,
  };
};
export const setGridComplete = (bool: boolean) => {
  return {
    type: 'SET_GRID_COMPLETE',
    payload: bool,
  }
}
