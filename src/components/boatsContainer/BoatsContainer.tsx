import React, { useState } from 'react';
import './boatsContainer.css';

function BoatsContainer(props: any) {
  const {
    setSize,
    placeBoat,
    setDragging,
    gridIndex,
    hoverLeave,
    validPlacement,
  } = props;
  const [size4BoatAmount, setSize4BoatAmount] = useState(1);
  const [size3BoatAmount, setSize3BoatAmount] = useState(2);
  const [size2BoatAmount, setSize2BoatAmount] = useState(3);
  const [size1BoatAmount, setSize1BoatAmount] = useState(4);
  return (
    <div className="boats-container">
      <div className=" boat-amount-container">
        <span>{size4BoatAmount}x</span>
        <div
          className="draggable-item"
          draggable="true"
          onDragStart={() => {
            if (size4BoatAmount > 0) {
              setSize(4);
              setDragging(true);
            }
          }}
          onDragEnd={() => {
            if (size4BoatAmount > 0) {
              if (placeBoat(gridIndex, 1)) {
                setSize4BoatAmount(size4BoatAmount - 1);
              }
            }
            setDragging(false);
            hoverLeave();
          }}
          onClick={() => setSize(4)}
        >
          <div className="visible-player grid-item"></div>
          <div className="visible-player grid-item"></div>
          <div className="visible-player grid-item"></div>
          <div className="visible-player grid-item"></div>
        </div>
      </div>

      <div className=" boat-amount-container">
        <span>{size3BoatAmount}x</span>
        <div
          className="draggable-item"
          draggable="true"
          onDragStart={() => {
            if (size3BoatAmount > 0) {
              setSize(3);
              setDragging(true);
            }
          }}
          onDragEnd={() => {
            if (size3BoatAmount > 0) {
              if (placeBoat(gridIndex, 1)) {
                setSize3BoatAmount(size3BoatAmount - 1);
              }
            }
            setDragging(false);
            hoverLeave();
          }}
          onClick={() => setSize(3)}
        >
          <div className="visible-player grid-item"></div>
          <div className="visible-player grid-item"></div>
          <div className="visible-player grid-item"></div>
        </div>
      </div>
      <div className=" boat-amount-container">
        <span>{size2BoatAmount}x</span>

        <div
          className="draggable-item"
          draggable="true"
          onDragStart={() => {
            if (size2BoatAmount > 0) {
              setSize(2);
              setDragging(true);
            }
          }}
          onDragEnd={() => {
            if (size2BoatAmount > 0) {
              if (placeBoat(gridIndex, 1)) {
                setSize2BoatAmount(size2BoatAmount - 1);
              }
            }

            setDragging(false);
            hoverLeave();
          }}
          onClick={() => setSize(2)}
        >
          <div className="visible-player grid-item"></div>
          <div className="visible-player grid-item"></div>
        </div>
      </div>
      <div className=" boat-amount-container">
        <span>{size1BoatAmount}x</span>
        <div
          className="draggable-item"
          draggable="true"
          onDragStart={() => {
            if (size1BoatAmount > 0) {
              setSize(1);
              setDragging(true);
            }
          }}
          onDragEnd={() => {
            if (size1BoatAmount > 0) {
              if (placeBoat(gridIndex, 1)) {
                setSize1BoatAmount(size1BoatAmount - 1);
              }
            }
            setDragging(false);
            hoverLeave();
          }}
          onClick={() => setSize(1)}
        >
          <div className="visible-player grid-item"></div>
        </div>
      </div>
    </div>
  );
}

export default BoatsContainer;
