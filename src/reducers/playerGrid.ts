const playerGridArray: number[] = [];
for (let i = 0; i < 100; i++) {
  playerGridArray.push(0);
  
}
const playerGridReducer = (
  state: number[] = playerGridArray,
  action: any,
) => {
  switch(action.type) {
    default: 
    return state
  }
};
export default playerGridReducer;
