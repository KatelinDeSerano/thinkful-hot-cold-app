import React, { Component } from 'react';
import './guessCount.css';


class GuessCount extends Component {
  render() {
    return (
      <div className="game-guessCount">
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default GuessCount;