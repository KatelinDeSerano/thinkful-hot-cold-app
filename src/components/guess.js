import React, { Component } from 'react';
import './guess.css';


class Guess extends Component {

  handleSubmit(event) {
    event.preventDefault(); 
    
    if (this.props.userGuess) {
      console.log("clicked");
      const value = this.input.value;
      this.props.userGuess(value);
      
    }

    this.input.value = "";
    
  }

  render() {
    return (
      <div className="game-guess">
        <form onSubmit={e => this.handleSubmit(e)} > 
          <input  
          min="1"
          max="100"
          ref={input => (this.input=input)}
          required
           />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Guess;