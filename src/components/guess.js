import React, { Component } from 'react';
import './guess.css';


class Guess extends Component {

  handleSubmit(event) {
    event.preventDefault(); 
    const value = this.input.value;
    this.input.value = "";
    console.log(value);
  }

  render() {
    return (
      <div className="game-guess">
        <form onSubmit={e => this.handleSubmit(e)} > 
          <input type="text" ref={input => (this.input=input)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Guess;