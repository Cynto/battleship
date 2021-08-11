import React, { useEffect, useState } from 'react';
import './start.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerGrid, addPlayerBoatArray } from '../../actions';
import BoatsContainer from '../boatsContainer/BoatsContainer';

const uniqid = require('uniqid');

function Start() {
  const [size, setSize] = useState(1);

  const [rotation, setRotation] = useState('horizontal');
  const [gridIndex, setGridIndex] = useState(1);

  const playerGridArray = useSelector((state: any) => state.playerGridArray);

  const dispatch = useDispatch();

  const hoverLeave = () => {
    let newArray = playerGridArray;
    for (let i = 0; i < newArray.length; i += 1) {
      if (newArray[i] === 2) {
        newArray[i] = 0;
      }
    }
    dispatch(setPlayerGrid(newArray));
  };

  const changeGridItem = (index: number, newItem: number) => {
    let newArray = playerGridArray;
    let newIndex = index;
    let indexArray = [];

    let possiblePlacement = true;
    for (let i = 0; i < size; i += 1) {
      if (rotation === 'horizontal') {
        indexArray.push(index + i);
      } else {
        indexArray.push(i + newIndex);
        newIndex += 9;
      }
    }
    const lastValue = indexArray.slice(-1);

    if (
      rotation === 'horizontal' ||
      (rotation === 'vertical' && lastValue[0] < 100)
    ) {
      for (let i = 0; i < indexArray.length; i += 1) {
        if (newArray[indexArray[i]] === 1) {
          possiblePlacement = false;
        }
        if (indexArray[i] % 10 === 9 && indexArray[i + 1] % 10 === 0) {
          possiblePlacement = false;
        }

        if (newArray[indexArray[i + 1]] === 1) {
          possiblePlacement = false;
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
      for (let i = 0; i < indexArray.length; i += 1) {
        if (
          newArray[indexArray[i] + 10] === 1 ||
          newArray[indexArray[i] - 10] === 1
        ) {
          possiblePlacement = false;
        }

        if (
          !firstTenArray.includes(indexArray[i]) &&
          (newArray[indexArray[i] - 1] === 1 ||
            newArray[indexArray[i] - 11] === 1 ||
            newArray[indexArray[i] + 9] === 1 ||
            newArray[indexArray[0] - 11] === 1)
        ) {
          possiblePlacement = false;
        }

        if (
          !lastTenArray.includes(indexArray[i]) &&
          (newArray[indexArray[i] + 1] === 1 ||
            newArray[indexArray[i] + 11] === 1 ||
            newArray[indexArray[i] - 9] === 1)
        ) {
          possiblePlacement = false;
        }
      }

      if (possiblePlacement) {
        for (let i = 0; i < indexArray.length; i += 1) {
          newArray[indexArray[i]] = newItem;
        }
        if (newItem === 1) {
          const boatInfo = {
            locationArray: indexArray,
            rotation,
            isSunk: false,
            isHit: false,
          };
          dispatch(addPlayerBoatArray(boatInfo));
        }
      }
    }
    dispatch(setPlayerGrid(newArray));

    return possiblePlacement;
  };
  document.addEventListener('keypress', (e) => {
    if (e.key === 'r') {
      if (rotation === 'vertical') {
        setRotation('horizontal');
      } else {
        setRotation('vertical');
      }
    }
  });
  return (
    <div data-testid="start" className="start">
      <div className="grid-layout-title-container">
        <h2>Arrange Your Board</h2>
        <p>Press R to Rotate Ships</p>
        <div className="grid-layout-container">
          <div className="grid-container">
            {playerGridArray.map((item: number, index: number) => {
              if (item === 0) {
                return (
                  <div
                    key={uniqid()}
                    data-testid={`grid-item-${index}`}
                    className="not-visible grid-item"
                    onDragEnter={() => {
                      hoverLeave();
                      changeGridItem(index, 2);
                      setGridIndex(index);
                    }}
                  ></div>
                );
              } else if (item === 1) {
                return (
                  <div
                    key={uniqid()}
                    data-testid={`grid-item-${index}`}
                    className="visible-player grid-item"
                  ></div>
                );
              } else if (item === 2) {
                return (
                  <div
                    key={uniqid()}
                    data-testid={`grid-item-hover-${index}`}
                    className="hover-player grid-item"
                  ></div>
                );
              }
            })}
          </div>
          <BoatsContainer
            hoverLeave={hoverLeave}
            setSize={setSize}
            changeGridItem={changeGridItem}
            gridIndex={gridIndex}
            rotation={rotation}
          />
        </div>
      </div>
    </div>
  );
}

export default Start;
