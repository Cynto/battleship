import React from 'react';
import './gameboard.css';
import { useSelector, useDispatch } from 'react-redux';
import playerTurn from '../../api/playerTurn';
const uniqid = require('uniqid');

function Gameboard(props: any) {
  const { gridArray, playerGrid } = props;
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
                        playerTurn(index);
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
                        playerTurn(index);
                      }
                }
              ></div>
            );
          } else if (item === 4) {
            return (
              <div
                key={uniqid()}
                data-testid={`grid-item-hover-${index}`}
                className=" not-visible grid-item computer-grid"
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
          }
        })}
      </div>
    </div>
  );
}

export default Gameboard;
