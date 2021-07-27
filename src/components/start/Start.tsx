import React from 'react';
import './start.css';
import { useSelector, useDispatch } from 'react-redux';

function Start() {
  const playerGridArray = useSelector((state: any) => state.playerGridArray);
  console.log(playerGridArray);
  return (
    <div data-testid="start" className="start">
      <div className="grid-layout-title-container">
        <div className="grid-layout-container">
          <div className="grid-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Start;
