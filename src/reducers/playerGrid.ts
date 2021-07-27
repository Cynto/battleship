const playerGridArray: number[] = [];
for (let i = 0; i < 100; i++) {
  playerGridArray.push(0);
}
const playerGridReducer = (state: number[] = playerGridArray, action: any) => {
  switch (action.type) {
    case 'SET_PLAYER_GRID':
      return [...action.payload];
    default:
      return state;
  }
};
export default playerGridReducer;
