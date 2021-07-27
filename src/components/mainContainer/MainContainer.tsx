import React from 'react'
import Gameboard from '../gameboard/Gameboard'
import './mainContainer.css'

function MainContainer() {
  return (
    <div data-testid="main-container" className="main-container">
      <Gameboard />
    </div>
  )
}

export default MainContainer
