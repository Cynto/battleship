import React, { useEffect } from 'react';
import './start.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerGrid } from '../../actions';
const uniqid = require('uniqid');

function Start() {
  const playerGridArray = useSelector((state: any) => state.playerGridArray);

  const dispatch = useDispatch();
  const placeBoat = (index: number, size: number, rotation: string) => {
    let newArray = playerGridArray;
    let newIndex = index;
    let indexArray = [];
    for (let i = 0; i < size; i += 1) {
      if (rotation === 'horizontal') {
        newArray[index + i] = 1;
      } else {
        indexArray.push(i + newIndex);
        newIndex += 9;
      }
    }
    const lastValue = indexArray.slice(-1);

    if (rotation === 'vertical' && lastValue[0] < 100) {
      let possiblePlacement = true;
      for (let i = 0; i < indexArray.length; i += 1) {
        if (newArray[indexArray[i]] === 1) {
          possiblePlacement = false;
        }
      }
      for (let i = 0; i < indexArray.length; i += 1) {
        if (possiblePlacement) {
          newArray[indexArray[i]] = 1;
        }
      }
    }
    dispatch(setPlayerGrid(newArray));
  };
  useEffect(() => {
    console.log(playerGridArray);
  }, [playerGridArray]);

  return (
    <div data-testid="start" className="start">
      <div className="grid-layout-title-container">
        <h2>Arrange Your Board</h2>
        <div className="grid-layout-container">
          <div className="grid-container">
            {playerGridArray.map((item: number, index: number) => {
              if (item === 0) {
                return (
                  <div
                    key={uniqid()}
                    className="not-visible grid-item"
                    onClick={() => placeBoat(index, 5, 'vertical')}
                  ></div>
                );
              } else if (item === 1) {
                return (
                  <div
                    key={uniqid()}
                    className="visible-player grid-item"
                  ></div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
