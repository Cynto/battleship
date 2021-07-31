import React, { useEffect, useState } from 'react';
import './start.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerGrid } from '../../actions';
import BoatsContainer from '../boatsContainer/BoatsContainer';

const uniqid = require('uniqid');

function Start() {
  const [size, setSize] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [rotation, setRotation] = useState('vertical');
  const [gridIndex, setGridIndex] = useState(1);
  const [validPlacement, setValidPlacement] = useState(true);
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

      for (let i = 0; i < indexArray.length; i += 1) {
        if (possiblePlacement) {
          newArray[indexArray[i]] = newItem;
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

  useEffect(() => {
    console.log(rotation);
  }, [rotation]);

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
                    onDragEnter={() => {
                      if (dragging) {
                        hoverLeave();

                        changeGridItem(index, 2);
                        setGridIndex(index);
                      }
                    }}
                  ></div>
                );
              } else if (item === 1) {
                return (
                  <div
                    key={uniqid()}
                    className="visible-player grid-item"
                  ></div>
                );
              } else if (item === 2) {
                return (
                  <div key={uniqid()} className="hover-player grid-item"></div>
                );
              }
            })}
          </div>
          <BoatsContainer
            validPlacement={validPlacement}
            hoverLeave={hoverLeave}
            setSize={setSize}
            changeGridItem={changeGridItem}
            setDragging={setDragging}
            gridIndex={gridIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default Start;
