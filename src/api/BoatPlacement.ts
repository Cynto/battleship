import { useSelector, useDispatch } from 'react-redux';
import store from '../store';
import AIGridReducer from '../reducers/AIGrid';
import { setAIGrid, SetAIBoatArray, setPlayerBoatArray } from '../actions';

const placeBoats = (playerOrAI: string) => {
  const gridArray: number[] = [];
  const boatArray: any[] = [];
  for (let i = 0; i < 100; i++) {
    gridArray.push(0);
  }
  const getRandomIndex = () => {
    return Math.floor(Math.random() * 99);
  };
  let placeItem = 3;
  if(playerOrAI === 'player') {
    placeItem = 1;
  }else {
    placeItem = 3;
  }
  let timesRun = 0;
  const placeBoat = (size: number) => {
    timesRun += 1;
    let validPlacement = true;
    let indexArray = [];
    const rotation =
      Math.floor(Math.random() * 2) === 1 ? 'vertical' : 'horizontal';
    let index = getRandomIndex();
    for (let i = 0; i < size; i += 1) {
      if (rotation === 'vertical') {
        indexArray.push(i + index);
        index += 9;
      } else {
        indexArray.push(index + i);
      }
    }
    const lastValue = indexArray.slice(-1);

    if (
      rotation === 'horizontal' ||
      (rotation === 'vertical' && lastValue[0] < 100)
    ) {
      for (let i = 0; i < indexArray.length; i += 1) {
        if (gridArray[indexArray[i]] === placeItem) {
          validPlacement = false;
        }
        if (indexArray[i] % 10 === 9 && indexArray[i + 1] % 10 === 0) {
          validPlacement = false;
        }

        if (gridArray[indexArray[i + 1]] === placeItem) {
          validPlacement = false;
        }
      }
    }
    if (lastValue[0] > 99) {
      validPlacement = false;
    }
    const firstTenArray: number[] = [];
    for (let i = 0; i < 10; i += 1) {
      firstTenArray.push(i * 10);
    }
    const lastTenArray: number[] = [];
    for (let i = 9; i < 100; i += 10) {
      lastTenArray.push(i);
    }
    for (let i = 0; i < indexArray.length; i += 1) {
      if (
        gridArray[indexArray[i] + 10] === placeItem ||
        gridArray[indexArray[i] - 10] === placeItem
      ) {
        validPlacement = false;
      }

      if (
        !firstTenArray.includes(indexArray[i]) &&
        (gridArray[indexArray[i] - 1] === placeItem ||
          gridArray[indexArray[i] - 11] === placeItem ||
          gridArray[indexArray[i] + 9] === placeItem ||
          gridArray[indexArray[0] - 11] === placeItem)
      ) {
        validPlacement = false;
      }

      if (
        !lastTenArray.includes(indexArray[i]) &&
        (gridArray[indexArray[i] + 1] === placeItem ||
          gridArray[indexArray[i] + 11] === placeItem ||
          gridArray[indexArray[i] - 9] === placeItem)
      ) {
        validPlacement = false;
      }
    }

    for (let i = 0; i < indexArray.length; i += 1) {
      if (validPlacement) {
        gridArray[indexArray[i]] = placeItem;
      }
    }

    if (timesRun >= 20) {
      return 'Exceeded 10';
    }
    if (validPlacement === false) {
      placeBoat(size);
    } else {
      timesRun = 0;
      const boatItem = {
        locationArray: indexArray,
        rotation,
        isSunk: false,
        isHit: false
      };
      boatArray.push(boatItem);
    }
  };

  placeBoat(4);

  placeBoat(3);
  placeBoat(3);

  placeBoat(2);
  placeBoat(2);
  placeBoat(2);

  placeBoat(1);
  placeBoat(1);
  placeBoat(1);
  placeBoat(1);
  if(playerOrAI === 'player') {
    store.dispatch(setPlayerBoatArray(boatArray))
  }else{
    store.dispatch(SetAIBoatArray(boatArray));
  
  }
  
  return gridArray;
};
export default placeBoats;
