import React from 'react'
import Gameboard from '../gameboard/Gameboard'
import './mainContainer.css'
import { useSelector, useDispatch } from 'react-redux';

function MainContainer() {
  const playerGridArray = useSelector((state: any) => state.playerGridArray);
  return (
    <div data-testid="main-container" className="main-container">
      <Gameboard playerGrid={true} gridArray={playerGridArray}/>
      
    </div>
  )
}

export default MainContainer
