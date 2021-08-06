import { useSelector, useDispatch } from 'react-redux';
import store from '../store';
import AIGridReducer from '../reducers/AIGrid';
import { setAIGrid } from '../actions';

const PlaceAIBoats = () => {
  const AIGridArray: number[] = [];
  for (let i = 0; i < 100; i++) {
    AIGridArray.push(0);
  }
  const getRandomIndex = () => {
    return Math.floor(Math.random() * 99);
  };
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
        if (AIGridArray[indexArray[i]] === 3) {
          validPlacement = false;
        }
        if (indexArray[i] % 10 === 9 && indexArray[i + 1] % 10 === 0) {
          validPlacement = false;
        }

        if (AIGridArray[indexArray[i + 1]] === 3) {
          validPlacement = false;
        }
      }
    }
    if (lastValue[0] > 100) {
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
        AIGridArray[indexArray[i] + 10] === 3 ||
        AIGridArray[indexArray[i] - 10] === 3
      ) {
        validPlacement = false;
      }

      if (
        !firstTenArray.includes(indexArray[i]) &&
        (AIGridArray[indexArray[i] - 1] === 3 ||
          AIGridArray[indexArray[i] - 11] === 3 ||
          AIGridArray[indexArray[i] + 9] === 3 ||
          AIGridArray[indexArray[0] - 11] === 3)
      ) {
        validPlacement = false;
      }

      if (
        !lastTenArray.includes(indexArray[i]) &&
        (AIGridArray[indexArray[i] + 1] === 3 ||
          AIGridArray[indexArray[i] + 11] === 3 ||
          AIGridArray[indexArray[i] - 9] === 3)
      ) {
        validPlacement = false;
      }
    }

    for (let i = 0; i < indexArray.length; i += 1) {
      if (validPlacement) {
        AIGridArray[indexArray[i]] = 3;
      }
    }
    console.log(`${validPlacement} size: ${size}`);

    if (timesRun >= 20) {
      return 'Exceeded 10';
    }
    if (validPlacement === false) {
      placeBoat(size);
    } else {
      timesRun = 0;
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
  let boats = 0;
  for (let i = 0; i < AIGridArray.length; i += 1) {
    if (AIGridArray[i] === 3) {
      boats += 1;
    }
  }
  console.log(boats);
  return AIGridArray;
};
export default PlaceAIBoats;
