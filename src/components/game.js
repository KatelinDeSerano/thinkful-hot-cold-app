import React, { Component } from 'react';
import './game.css';
import Header from './header.js';
import GuessContainer from './guessContainer.js';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Header /> 
        <GuessContainer />

      </div>
    );
  }
}

export default Game;
