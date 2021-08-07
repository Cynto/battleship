const AIBoatReducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case 'SET_AI_BOAT_ARRAY':
      return [...action.payload];
    default:
      return state;
  }
};
export default AIBoatReducer;
