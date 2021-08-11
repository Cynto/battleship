import turn from './turn';
import store from '../store';
import { setPlayerTurn } from '../actions';

const AITurn: any = () => {
  const randomIndex = () => {
    return Math.floor(Math.random() * 100);
  };

  const AIGrid = store.getState().AIGrid;

  let indexToHit = randomIndex();
  let playerBoatsHit = 0;
  let AIBoatsHit = 0;
  const playerGrid = store.getState().playerGridArray;
  for (let i = 0; i < playerGrid.length; i += 1) {
    if (playerGrid[i] === 7) {
      if (playerGrid[i + 1] !== 7 && playerGrid[i + 1] !== 6 && i + 1 <= 99) {
        indexToHit = i + 1;
      } else if (
        playerGrid[i - 1] !== 7 &&
        playerGrid[i - 1] !== 6 &&
        i - 1 >= 0
      ) {
        indexToHit = i - 1;
      } else if (
        playerGrid[i - 10] !== 7 &&
        playerGrid[i - 10] !== 6 &&
        i - 10 >= 0
      ) {
        indexToHit = i - 10;
      } else if (
        playerGrid[i + 10] !== 7 &&
        playerGrid[i + 10] !== 6 &&
        i + 10 <= 99
      ) {
        indexToHit = i + 10;
      }
      if (
        playerGrid[i] === 7 &&
        playerGrid[i + 1] === 7 &&
        playerGrid[i + 2] !== 6 &&
        playerGrid[i + 2] !== 7 &&
        i + 2 >= 0
      ) {
        indexToHit = i + 2;
        break;
      } else if (
        playerGrid[i] === 7 &&
        playerGrid[i + 1] === 7 &&
        playerGrid[i + 2] === 7 &&
        playerGrid[i + 3] !== 6 &&
        playerGrid[i + 3] !== 7 &&
        i + 3 <= 99
      ) {
        indexToHit = i + 3;
        break;
      } else if (
        playerGrid[i] === 7 &&
        playerGrid[i - 1] === 7 &&
        playerGrid[i - 2] !== 6 &&
        playerGrid[i - 2] !== 7 &&
        i - 2 >= 0
      ) {
        indexToHit = i - 2;
        break;
      } else if (
        playerGrid[i] === 7 &&
        playerGrid[i - 1] === 7 &&
        playerGrid[i - 2] === 7 &&
        playerGrid[i - 3] !== 6 &&
        playerGrid[i - 3] !== 7 &&
        i - 3 >= 0
      ) {
        indexToHit = i - 3;
        break;
      } else if (
        playerGrid[i] === 7 &&
        playerGrid[i - 10] === 7 &&
        playerGrid[i - 20] !== 6 &&
        playerGrid[i - 20] !== 7 &&
        i - 20 >= 0
      ) {
        indexToHit = i - 20;
        break;
      } else if (
        playerGrid[i] === 7 &&
        playerGrid[i - 10] === 7 &&
        playerGrid[i - 20] === 7 &&
        playerGrid[i - 30] !== 6 &&
        playerGrid[i - 30] !== 7 &&
        i - 30 >= 0
      ) {
        indexToHit = i - 30;
        break;
      } else if (
        playerGrid[i] === 7 &&
        playerGrid[i + 10] === 7 &&
        playerGrid[i + 20] !== 6 &&
        playerGrid[i + 20] !== 7 &&
        i + 20 <= 99
      ) {
        indexToHit = i + 20;
        break;
      } else if (
        playerGrid[i] === 7 &&
        playerGrid[i + 10] === 7 &&
        playerGrid[i + 20] === 7 &&
        playerGrid[i + 30] !== 6 &&
        playerGrid[i + 30] !== 7 &&
        i + 30 <= 99
      ) {
        indexToHit = i - 30;
        break;
      }
      playerBoatsHit += 1;
      
    }
    if(AIGrid[i] === 5) {
      AIBoatsHit += 1;
    }
  }
  console.log(playerBoatsHit)
  if (playerBoatsHit !== 20 && AIBoatsHit !== 20) {
    console.log(indexToHit);
    if (
      (playerGrid[indexToHit] === 6 || playerGrid[indexToHit] === 7) &&
      indexToHit >= 0 &&
      indexToHit <= 99
    ) {
      store.dispatch(setPlayerTurn(false));
      return AITurn();
    }
    if (turn(indexToHit, 'AI') === false) {
      store.dispatch(setPlayerTurn(true));
    } else {
      setTimeout(AITurn, 1000);
      store.dispatch(setPlayerTurn(false));
    }
  }
};
export default AITurn;
