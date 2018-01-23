import React, { Component } from 'react';
import './feedback.css';


class Feedback extends Component {
  render() {
    return (
      <div className="game-feedback">
        <h1>{this.props.feedback}</h1>
      </div>
    );
  }
}

export default Feedback