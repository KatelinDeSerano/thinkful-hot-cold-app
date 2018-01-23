import React from 'react';
import './guessCount.css';


export default function GuessCount(props) {

  const count = props.guesses.length;
  const isPlural = props.guesses.length !== 1;
  const guessNoun = isPlural ? 'guesses' : 'guess';

  return (
      <h2 id="guessCount">
          You've made <span id="count">{count}</span> {guessNoun}!
      </h2>
  );
}