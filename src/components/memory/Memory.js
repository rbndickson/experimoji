import React, { Component } from "react";
import { connect } from "react-redux";
import "./memory.css";

class Memory extends Component {
  render() {
    return (
      <main>
        <p>Match the pictures with the words</p>
        <div className="memory-flashcards-container">
          <ul className="memory-flashcards">
            <li className="memory-flashcard">a</li>
            <li className="memory-flashcard">b</li>
            <li className="memory-flashcard">c</li>
            <li className="memory-flashcard">d</li>
            <li className="memory-flashcard">a</li>
            <li className="memory-flashcard">b</li>
            <li className="memory-flashcard">c</li>
            <li className="memory-flashcard">d</li>
          </ul>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards).slice(0, 5);
  return { flashcards: flashcards };
}

export default connect(mapStateToProps)(Memory);
