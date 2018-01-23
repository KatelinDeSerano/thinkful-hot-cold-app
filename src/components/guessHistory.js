import React from 'react';
import './guessHistory.css';


function GuessHistory(props) {
  
  const guessList = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

    return (
      <div className="game-guessHistory">
        <span>{guessList}</span>
      </div>
    );
 
  }


export default GuessHistory;