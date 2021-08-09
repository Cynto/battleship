const playerTurnReducer = (state: boolean = true, action: any) => {
  switch (action.type) {
    case 'SET_PLAYER_TURN':
      return action.payload;
    default:
      return state;
  }
};
export default playerTurnReducer;
