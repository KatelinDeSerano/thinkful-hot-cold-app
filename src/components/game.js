import React, { Component } from 'react';
import './game.css';
import Header from './header.js';
import Feedback from './feedback.js';
import Guess from './guess.js';
import GuessCount from './guessCount.js';
import GuessHistory from './guessHistory.js';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Header /> 
        <h1>HOT or COLD</h1>
        <Feedback />
        <Guess />
        <GuessCount />
        <GuessHistory />

      </div>
    );
  }
}

export default Game;
