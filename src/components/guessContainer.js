import React, { Component } from 'react';
import './guessContainer.css';
import Feedback from './feedback.js';
import Guess from './guess.js';
import GuessCount from './guessCount.js';
import GuessHistory from './guessHistory.js';

class GuessContainer extends Component {
  render() {
    return (
      <div className="guessContainer">
        <h1>HOT or COLD</h1>
        <Feedback />
        <Guess />
        <GuessCount />
        <GuessHistory />
      </div>
    );
  }
}

export default GuessContainer;