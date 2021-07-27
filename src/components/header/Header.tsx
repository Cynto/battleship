import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header data-testid="header" className="header">
      <Link to="/">
        <h1>Battleship</h1>
      </Link>
    </header>
  );
}

export default Header;
