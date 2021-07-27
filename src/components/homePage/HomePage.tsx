import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

function HomePage(props: any) {
  return (
    <div data-testid="start-page" className="start-page">
      <div className="menu-container">
        <p>Your mission is to destroy all enemy ships!</p>
        <Link to="/start">
          <button>Start Game</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
