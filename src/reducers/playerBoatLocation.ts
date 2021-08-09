const playerBoatReducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case 'ADD_PLAYER_BOAT_ARRAY':
      return [...state, action.payload];
      case 'SET_PLAYER_BOAT_ARRAY':
        return [...action.payload];
    default:
      return state;
  }
};
export default playerBoatReducer;
