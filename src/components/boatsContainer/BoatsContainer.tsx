import React, { useState, useEffect } from 'react';
import './boatsContainer.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setGridComplete, setPlayerGrid } from '../../actions';
import placeBoats from '../../api/BoatPlacement'

function BoatsContainer(props: any) {
  const playerGridComplete = useSelector(
    (state: any) => state.playerGridComplete,
  );
  const {
    setSize,
    changeGridItem,

    gridIndex,
    hoverLeave,
    rotation,
  } = props;
  const [size4BoatAmount, setSize4BoatAmount] = useState(1);
  const [size3BoatAmount, setSize3BoatAmount] = useState(2);
  const [size2BoatAmount, setSize2BoatAmount] = useState(3);
  const [size1BoatAmount, setSize1BoatAmount] = useState(4);
  const [verticalClass, setVerticalClass] = useState(
    rotation === 'vertical' ? 'vertical' : '',
  );
  const dispatch = useDispatch();

  const freshArray: number[] = [];
  for (let i = 0; i < 100; i += 1) {
    freshArray.push(0);
  }

  useEffect(() => {
    if (
      !size1BoatAmount &&
      !size2BoatAmount &&
      !size3BoatAmount &&
      !size4BoatAmount
    ) {
      dispatch(setGridComplete(true));
    }
  }, [size4BoatAmount, size3BoatAmount, size2BoatAmount, size1BoatAmount]);

  const resetBoatsAmount = () => {
    setSize4BoatAmount(1);
    setSize3BoatAmount(2);
    setSize2BoatAmount(3);
    setSize1BoatAmount(4);
  };
  useEffect(() => {
    if (playerGridComplete) {
      setSize4BoatAmount(0);
      setSize3BoatAmount(0);
      setSize2BoatAmount(0);
      setSize1BoatAmount(0);
    }
  }, [playerGridComplete]);
  useEffect(() => {
    if (rotation === 'vertical') {
      setVerticalClass('vertical');
    } else setVerticalClass('');
  }, [rotation]);
  return (
    <div className="total-right-container">
      <div className={`boats-container ${verticalClass}`}>
        <div className={`boat-amount-container ${verticalClass}`}>
          <span>{size4BoatAmount}x</span>
          <div
            data-testid="draggable-item"
            className={`draggable-item ${verticalClass}`}
            draggable="true"
            onDragStart={() => setSize(4)}
            onDragEnd={() => {
              if (size4BoatAmount > 0) {
                if (changeGridItem(gridIndex, 1)) {
                  setSize4BoatAmount(size4BoatAmount - 1);
                }
              }

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

        <div className={`boat-amount-container ${verticalClass}`}>
          <span>{size3BoatAmount}x</span>
          <div
            className={`draggable-item ${verticalClass}`}
            draggable="true"
            onDragStart={() => setSize(3)}
            onDragEnd={() => {
              if (size3BoatAmount > 0) {
                if (changeGridItem(gridIndex, 1)) {
                  setSize3BoatAmount(size3BoatAmount - 1);
                }
              }

              hoverLeave();
            }}
            onClick={() => setSize(3)}
          >
            <div className="visible-player grid-item"></div>
            <div className="visible-player grid-item"></div>
            <div className="visible-player grid-item"></div>
          </div>
        </div>
        <div className={`boat-amount-container ${verticalClass}`}>
          <span>{size2BoatAmount}x</span>

          <div
            className={`draggable-item ${verticalClass}`}
            draggable="true"
            onDragStart={() => setSize(2)}
            onDragEnd={() => {
              if (size2BoatAmount > 0) {
                if (changeGridItem(gridIndex, 1)) {
                  setSize2BoatAmount(size2BoatAmount - 1);
                }
              }

              hoverLeave();
            }}
            onClick={() => setSize(2)}
          >
            <div className="visible-player grid-item"></div>
            <div className="visible-player grid-item"></div>
          </div>
        </div>
        <div className={`boat-amount-container ${verticalClass}`}>
          <span>{size1BoatAmount}x</span>
          <div
            className={`draggable-item ${verticalClass}`}
            draggable="true"
            onDragStart={() => setSize(1)}
            onDragEnd={() => {
              if (size1BoatAmount > 0) {
                if (changeGridItem(gridIndex, 1)) {
                  setSize1BoatAmount(size1BoatAmount - 1);
                }
              }

              hoverLeave();
            }}
            onClick={() => setSize(1)}
          >
            <div className="visible-player grid-item"></div>
          </div>
        </div>
      </div>
      <div className="start-button-container">
        <button
          onClick={() => {
            resetBoatsAmount();
            dispatch(setPlayerGrid(freshArray));
            dispatch(setGridComplete(false))
          }}
        >
          Reset{' '}
        </button>
        <button onClick={() => {
          dispatch(setPlayerGrid(placeBoats('player')))
          dispatch(setGridComplete(true));
        }}>
          Randomize
        </button>
        {!size1BoatAmount &&
        !size2BoatAmount &&
        !size3BoatAmount &&
        !size4BoatAmount ? (
          <Link to="/game">
            <button>Start</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default BoatsContainer;
