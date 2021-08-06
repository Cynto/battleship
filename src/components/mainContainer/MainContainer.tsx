import React from 'react'
import Gameboard from '../gameboard/Gameboard'
import './mainContainer.css'
import { useSelector, useDispatch } from 'react-redux';

function MainContainer() {
  const playerGridArray = useSelector((state: any) => state.playerGridArray);
  const AIGrid = useSelector((state: any) => state.AIGrid);
  
  return (
    <div data-testid="main-container" className="main-container">
      <Gameboard playerGrid={true} gridArray={playerGridArray}/>
      <Gameboard playerGrid={false} gridArray={AIGrid}/>
    </div>
  )
}

export default MainContainer
