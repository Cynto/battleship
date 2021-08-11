import React, { useEffect, useState } from 'react';
import Gameboard from '../gameboard/Gameboard';
import './mainContainer.css';
import { useSelector, useDispatch } from 'react-redux';
import EndScreen from '../endScreen/EndScreen';

function MainContainer() {
  const playerGridArray = useSelector((state: any) => state.playerGridArray);
  const AIGrid = useSelector((state: any) => state.AIGrid);
  const playerTurn = useSelector((state: any) => state.playerTurn);
  const [whoWon, setWhoWon] = useState('');

  useEffect(() => {
    let playerBoatsSunk = 0;
    let AIBoatsSunk = 0;
    for (let i = 0; i < playerGridArray.length; i += 1) {
      if (playerGridArray[i] === 7) {
        playerBoatsSunk += 1;
      }
      if (AIGrid[i] === 5) {
        AIBoatsSunk += 1;
      }
    }
    if (playerBoatsSunk === 20) {
      setWhoWon('AI')
    } else if (AIBoatsSunk === 20) {
      setWhoWon('player')
    }
  }, [[playerGridArray, AIGrid]]);

  return (
    <div data-testid="main-container" className="main-container">
      {whoWon === '' ? (
        <div className="grid-turn-container">
          <Gameboard playerGrid={true} gridArray={playerGridArray} />
          <div className="turn">
            <h1>{playerTurn ? 'Your Turn!' : 'AI Turn'}</h1>
          </div>
          <Gameboard playerGrid={false} gridArray={AIGrid} />{' '}
        </div>
      ) : null}
      {whoWon !== '' ? <EndScreen whoWon={whoWon} setWhoWon={setWhoWon}/> : null}
    </div>
  );
}

export default MainContainer;
