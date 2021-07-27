import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="left-footer">
        <h3>Made By Luca</h3>
        <a href="https://github.com/Cynto" rel="noreferrer" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="right-footer">
        <h3>GitHub Repository</h3>

        <a
          href="https://github.com/Cynto/battleship"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
