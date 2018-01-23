import React, { Component } from 'react';
import './game.css';
import Header from './header.js';
import Feedback from './feedback.js';
import Guess from './guess.js';
import GuessCount from './guessCount.js';
import GuessHistory from './guessHistory.js';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feedback: "Make Your Guess",
      correctAnswer: Math.floor(Math.random()*100)+1,
      guesses: []
    };
  }
  userGuess(guess) {
    this.setState({
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    const {feedback, guesses} = this.state;
    return (
      <div className="game">
        <Header /> 
        <Feedback feedback={feedback}/>
        <Guess userGuess={guess => this.userGuess(guess)}/>
        <GuessCount guesses={guesses}/>
        <GuessHistory guesses={guesses}/>
      </div>
    );
  }
}

export default Game;
