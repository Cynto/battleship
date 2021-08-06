const AIGrid: number[] = [];
for (let i = 0; i < 100; i++) {
  AIGrid.push(0);
}
const AIGridReducer = (state: number[] = AIGrid, action: any) => {
  switch (action.type) {
    case 'SET_AI_GRID':
      return [...action.payload];
    default:
      return state;
  }
};
export default AIGridReducer;
