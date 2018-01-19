import React, { Component } from 'react';
import './game.css';
import Header from './header.js';
import Feedback from './feedback.js';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Header /> 
        <h1>HOT or COLD</h1>
        <Feedback />

      </div>
    );
  }
}

export default Game;