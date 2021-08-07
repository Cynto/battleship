import store from '../store';
import { setAIGrid, SetAIBoatArray } from '../actions';

const playerTurn = (index: number) => {
  console.log(index);
  const storeState = store.getState();
  let AIGridArray = storeState.AIGrid;
  if (AIGridArray[index] === 0) {
    AIGridArray[index] = 4;
  } else if (AIGridArray[index] === 3) {
    AIGridArray[index] = 5;
  }
  let AIBoatArray: any[] = storeState.AIBoatArray;
  const firstTenArray: number[] = [];
  for (let i = 0; i < 10; i += 1) {
    firstTenArray.push(i * 10);
  }
  const lastTenArray: number[] = [];
  for (let i = 9; i < 100; i += 10) {
    lastTenArray.push(i);
  }
  for (let i = 0; i < AIBoatArray.length; i += 1) {
    AIBoatArray[i].isSunk = AIBoatArray[i].locationArray.every(
      (index: any) => AIGridArray[index] === 5,
    )
      ? true
      : false;
    AIBoatArray[i].isHit = AIBoatArray[i].locationArray.some(
      (index: any) => AIGridArray[index] === 5,
    )
      ? true
      : false;

    if (AIBoatArray[i].isSunk) {
      for (let o = 0; o < AIBoatArray[i].locationArray.length; o += 1) {
        if (AIBoatArray[i].rotation === 'horizontal') {
          if (AIBoatArray[i].locationArray[o] + 10 <= 100) {
            AIGridArray[AIBoatArray[i].locationArray[o] + 10] = 4;
          }
          AIGridArray[AIBoatArray[i].locationArray[o] - 10] = 4;
          if (
            !lastTenArray.includes(AIBoatArray[i].locationArray[o]) &&
            AIGridArray[AIBoatArray[i].locationArray[o] + 1] !== 5
          ) {
            if (AIBoatArray[i].locationArray[o] + 11 <= 100) {
              AIGridArray[AIBoatArray[i].locationArray[o] + 11] = 4;
            }

            AIGridArray[AIBoatArray[i].locationArray[o] - 9] = 4;
            AIGridArray[AIBoatArray[i].locationArray[o] + 1] = 4;
          }
          if (
            !firstTenArray.includes(AIBoatArray[i].locationArray[o]) &&
            AIGridArray[AIBoatArray[i].locationArray[o] - 1] !== 5
          ) {
            if (AIBoatArray[i].locationArray[o] + 9 <= 99) {
              AIGridArray[AIBoatArray[i].locationArray[o] + 9] = 4;
            }
            AIGridArray[AIBoatArray[i].locationArray[o] - 1] = 4;

            AIGridArray[AIBoatArray[i].locationArray[o] - 11] = 4;
          }
        }
      }
    }
  }
  store.dispatch(setAIGrid(AIGridArray));
  store.dispatch(SetAIBoatArray(AIBoatArray));
  return index;
};
export default playerTurn;
