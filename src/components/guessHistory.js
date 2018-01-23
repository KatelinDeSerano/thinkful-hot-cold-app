import React from 'react';
import './guessHistory.css';


function GuessHistory(props) {
  
  const guessList = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

    return (
      <ul className="guessBox clearfix">
        {guessList}
      </ul>
    );
 
  }


export default GuessHistory;