import React, { Component } from 'react';
import './guessCount.css';


class GuessCount extends Component {
  render() {
    const count = this.props.guesses.length;
    return (
      <div className="game-guessCount">
        <h1>{count}</h1>
      </div>
    );
  }
}

export default GuessCount;