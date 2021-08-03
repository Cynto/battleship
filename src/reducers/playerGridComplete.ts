const playerGridCompleteReducer = (state: boolean = false, action: any) => {
  switch (action.type) {
    case 'SET_GRID_COMPLETE':
      return action.payload;
    default:
      return state;
  }
};
export default playerGridCompleteReducer;