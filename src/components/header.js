import React from 'react';
import './header.css';


export default function Header(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            
            onClick={() => props.onRestartGame()}
          >
            + New Game
          </a>
        </li>
      </ul>
    </nav>
  );
}

