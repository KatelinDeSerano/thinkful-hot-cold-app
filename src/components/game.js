import React, { Component } from 'react';
import './game.css';
import Header from './header.js';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Header /> 
      </div>
    );
  }
}

export default Game;
