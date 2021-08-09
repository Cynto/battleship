import store from '../store';
import {
  setAIGrid,
  SetAIBoatArray,
  setPlayerGrid,
  setPlayerBoatArray,
} from '../actions';
import { setPlayerTurn } from '../actions';
import AITurn from './AITurn';

const turn = (index: number, playerOrAI: string) => {
  
  const storeState = store.getState();
  let grid: number[] = [];
  let playerTurn = storeState.playerTurn;
  let boatArray: any[] = [];

  let boatHit: number = 5;
  let emptyHit = 4;
  if (playerOrAI === 'player') {
    grid = storeState.AIGrid;
    boatArray = storeState.AIBoatArray;
    boatHit = 5;
    emptyHit = 4;
  } else {
    grid = storeState.playerGridArray;
    boatArray = storeState.playerBoatArray;
    boatHit = 7;
    emptyHit = 6;
  }
  let hitBoat = false;
  if (grid[index] === 0) {
    hitBoat = false;
    grid[index] = emptyHit;
    if (playerOrAI === 'player') {
      store.dispatch(setPlayerTurn(false));
      return setTimeout(AITurn, 1000);
    }
    
  } else if (grid[index] === 3 || grid[index] === 1) {
    hitBoat = true;
    grid[index] = boatHit;
    if(playerOrAI === 'player') {
      store.dispatch(setPlayerTurn(true));
    }
  }

  const firstTenArray: number[] = [];
  for (let i = 0; i < 10; i += 1) {
    firstTenArray.push(i * 10);
  }
  const lastTenArray: number[] = [];
  for (let i = 9; i < 100; i += 10) {
    lastTenArray.push(i);
  }
  for (let i = 0; i < boatArray.length; i += 1) {
    boatArray[i].isSunk = boatArray[i].locationArray.every(
      (index: any) => grid[index] === boatHit,
    )
      ? true
      : false;
    boatArray[i].isHit = boatArray[i].locationArray.some(
      (index: any) => grid[index] === boatHit,
    )
      ? true
      : false;

    if (boatArray[i].isSunk) {
      for (let o = 0; o < boatArray[i].locationArray.length; o += 1) {
        if (
          boatArray[i].locationArray[o] + 10 <= 100 &&
          grid[boatArray[i].locationArray[o] + 10] !== boatHit
        ) {
          grid[boatArray[i].locationArray[o] + 10] = emptyHit;
        }
        if (grid[boatArray[i].locationArray[o] - 10] !== boatHit) {
          grid[boatArray[i].locationArray[o] - 10] = emptyHit;
        }
        if (
          !lastTenArray.includes(boatArray[i].locationArray[o]) &&
          grid[boatArray[i].locationArray[o] + 1] !== boatHit
        ) {
          if (boatArray[i].locationArray[o] + 11 <= 100) {
            grid[boatArray[i].locationArray[o] + 11] = emptyHit;
          }

          grid[boatArray[i].locationArray[o] - 9] = emptyHit;
          grid[boatArray[i].locationArray[o] + 1] = emptyHit;
        }
        if (
          !firstTenArray.includes(boatArray[i].locationArray[o]) &&
          grid[boatArray[i].locationArray[o] - 1] !== boatHit
        ) {
          if (boatArray[i].locationArray[o] + 9 <= 99) {
            grid[boatArray[i].locationArray[o] + 9] = emptyHit;
          }
          grid[boatArray[i].locationArray[o] - 1] = emptyHit;

          grid[boatArray[i].locationArray[o] - 11] = emptyHit;
        }
      }
    }
  }
  if (playerOrAI === 'player') {
    store.dispatch(setAIGrid(grid));
    store.dispatch(SetAIBoatArray(boatArray));
  } else {
    store.dispatch(setPlayerGrid(grid));
    store.dispatch(setPlayerBoatArray(boatArray));
  }

  return hitBoat;
};
export default turn;
