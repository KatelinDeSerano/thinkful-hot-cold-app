import React, { Component } from 'react';
import './guessContainer.css';
import Feedback from './feedback.js';
import Guess from './guess.js';
import GuessCount from './guessCount.js';
import GuessHistory from './guessHistory.js';

class GuessContainer extends Component {
  render() {
    const count = this.props.guesses.length;
    return (
      <div className="guessContainer">
        <h1>HOT or COLD</h1>
        <Feedback feedback={this.props.feedback} />
        <Guess />
        <GuessCount count={count}/>
        <GuessHistory />
      </div>
    );
  }
}

export default GuessContainer;