import React, { Component } from 'react';
import './game.css';
import Header from './header.js';
import GuessContainer from './guessContainer.js';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feedback: "Make Your Guess",
      correctAnswer: Math.floor(Math.random()*100)+1,
      guesses: []
    }
  }

  render() {
    return (
      <div className="game">
        <Header /> 
        <GuessContainer feedback={this.state.feedback} guesses={this.state.guesses} />
      </div>
    );
  }
}

export default Game;
