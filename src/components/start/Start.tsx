import React, { useEffect, useState } from 'react';
import './start.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerGrid } from '../../actions';
import BoatsContainer from '../boatsContainer/BoatsContainer';

const uniqid = require('uniqid');

function Start() {
  const [size, setSize] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [rotation, setRotation] = useState('horizontal');
  
  const [gridIndex, setGridIndex] = useState(1);
  const [validPlacement, setValidPlacement] = useState(true)
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

  const placeBoat = (index: number, type: number) => {
    let newArray = playerGridArray;
    let newIndex = index;
    let indexArray = [];
    let horIndexArray = [];
    let possiblePlacement = true;
    for (let i = 0; i < size; i += 1) {
      if (rotation === 'horizontal') {
        horIndexArray.push(index + i);
      } else {
        indexArray.push(i + newIndex);
        newIndex += 9;
      }
    }
    const lastValue = indexArray.slice(-1);

    if (rotation === 'vertical' && lastValue[0] < 100) {
      
      for (let i = 0; i < indexArray.length; i += 1) {
        if (newArray[indexArray[i]] === 1) {
          possiblePlacement = false;
          setValidPlacement(false)
        }
      }
      for (let i = 0; i < indexArray.length; i += 1) {
        if (possiblePlacement) {
          newArray[indexArray[i]] = type;
          setValidPlacement(true)
        }
      }
    } else if (rotation === 'horizontal') {
      

      for (let i = 0; i < horIndexArray.length; i += 1) {
        if (newArray[horIndexArray[i]] === 1) {
          possiblePlacement = false;
          setValidPlacement(false)
        }
        if (horIndexArray[i] % 10 === 9 && horIndexArray[i + 1] % 10 === 0) {
          possiblePlacement = false;
          setValidPlacement(false)
        }
        
        if(newArray[horIndexArray[(i + 1)]] === 1) {
          possiblePlacement = false;
          setValidPlacement(false)
        }
      }
      const lastHorValue = horIndexArray.slice(-1)
      if(newArray[lastHorValue[0] + 1] === 1 || newArray[horIndexArray[0] - 1] === 1) {
        possiblePlacement = false;
        setValidPlacement(false)
      }
      for (let i = 0; i < horIndexArray.length; i += 1) {
        if (possiblePlacement) {
          newArray[horIndexArray[i]] = type;
          setValidPlacement(true)
        }
      }
    }
    dispatch(setPlayerGrid(newArray));
    return possiblePlacement
  };

  
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
                        placeBoat(index, 2);
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
          <BoatsContainer validPlacement={validPlacement} hoverLeave={hoverLeave} setSize={setSize} placeBoat={placeBoat} setDragging={setDragging} gridIndex={gridIndex}/>
        </div>
      </div>
    </div>
  );
}

export default Start;
