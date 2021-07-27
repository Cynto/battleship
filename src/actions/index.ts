export const setPlayerGrid = (newArray: number[]) => {
  return {
    type: 'SET_PLAYER_GRID',
    payload: newArray,
  };
};
