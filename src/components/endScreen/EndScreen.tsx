import React from 'react';
import './endScreen.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPlayerGrid, setGridComplete, setAIGrid, setPlayerTurn } from '../../actions/index';
import placeBoats from '../../api/BoatPlacement';

function EndScreen(props: any) {
  const dispatch = useDispatch();
  const { whoWon, setWhoWon } = props;

  const freshArray: number[] = [];
  for (let i = 0; i < 100; i += 1) {
    freshArray.push(0);
  }
  return (
    <div className="end-container">
      <h2>
        {whoWon === 'player'
          ? 'You won the game!'
          : 'The enemy AI has defeated you!'}
      </h2>
      <Link to="start">
        <button
          onClick={() => {
            dispatch(setPlayerGrid(freshArray));
            dispatch(setGridComplete(false));
            const AIArray: number[] = placeBoats('AI');
           
            dispatch(setAIGrid(AIArray));
            setWhoWon('')
            dispatch(setPlayerTurn(true))
          }}
        >
          Play Again
        </button>
      </Link>
    </div>
  );
}

export default EndScreen;
