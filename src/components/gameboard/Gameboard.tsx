import React, {useEffect} from 'react';
import './gameboard.css';
import { useSelector, useDispatch } from 'react-redux';
import turn from '../../api/turn';
const uniqid = require('uniqid');

function Gameboard(props: any) {
  const { gridArray, playerGrid } = props;
  const playerTurn = useSelector((state: any) => state.playerTurn)

  useEffect(() => {
   console.log(playerTurn)
  }, [playerTurn])
  return (
    <div data-testid="gameboard" className="gameboard-container">
      <div className="title-container">
        {' '}
        <h2>{playerGrid ? 'Player Board' : 'AI Board'}</h2>
      </div>
      <div className="grid-container">
        {gridArray.map((item: number, index: number) => {
          if (item === 0) {
            return (
              <div
                key={uniqid()}
                data-testid={`grid-item-${index}`}
                className={
                  playerGrid
                    ? 'not-visible grid-item'
                    : 'not-visible grid-item computer-grid'
                }
                onClick={
                  playerGrid
                    ? undefined
                    : () => {
                      if(playerTurn) {
                        turn(index, 'player');
                      }
                        
                      }
                }
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
          } else if (item === 3) {
            return (
              <div
                key={uniqid()}
                data-testid={`grid-item-hover-${index}`}
                className="hover-player not-visible grid-item computer-grid"
                onClick={
                  playerGrid
                    ? undefined
                    : () => {
                      if(playerTurn) {
                        turn(index, 'player');
                      }
                      }
                }
              ></div>
            );
          } else if (item === 4) {
            return (
              <div
                key={uniqid()}
                data-testid={`grid-item-hover-${index}`}
                className=" hit-empty grid-item computer-grid"
              >
                <i className="fas fa-bomb"></i>
              </div>
            );
          } else if (item === 5) {
            return (
              <div
                key={uniqid()}
                data-testid={`grid-item-hover-${index}`}
                className=" visible-player grid-item computer-grid"
              >
                <i className="fas fa-bomb"></i>
              </div>
            );
          } else if (item === 6) {
            return (
              <div
                key={uniqid()}
                data-testid={`grid-item-hover-${index}`}
                className="hit-empty grid-item"
              >
                <i className="fas fa-bomb"></i>
              </div>
            );
          } else if (item === 7) {
            return (
              <div
                key={uniqid()}
                data-testid={`grid-item-hover-${index}`}
                className="hit-boat grid-item"
              >
                <i className="fas fa-bomb"></i>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Gameboard;
