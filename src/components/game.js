import React, { Component } from 'react';
import './game.css';
import Header from './header.js';
import Feedback from './feedback.js';
import Guess from './guess.js';
import GuessCount from './guessCount.js';
import GuessHistory from './guessHistory.js';
import Info from './info.js';

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

    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }
    
    const answerDifference = Math.abs(guess - this.state.correctAnswer);
    console.log(this.state.correctAnswer);
    
    let feedback;
    if (answerDifference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (answerDifference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (answerDifference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (answerDifference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random()*100)+1
    });
  }

  render() {
    const {feedback, guesses} = this.state;
    return (
      <div className="game">
        <Header onRestartGame={() => this.props.onRestartGame()} /> 
      
        <Feedback feedback={feedback} />
        <Guess userGuess={guess => this.userGuess(guess)} />
        <GuessCount guesses={guesses} />
        <GuessHistory guesses={guesses} />
      
        <Info />
      </div>
    );
  }
}

export default Game;
