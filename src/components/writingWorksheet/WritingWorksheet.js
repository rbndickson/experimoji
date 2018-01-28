import React, { Component } from "react";
import { connect } from "react-redux";
import "./writingWorksheet.css";

class WritingWorksheet extends Component {
  render() {
    return (
      <div className="writing-practise-container">
        <h2>Animals</h2>
        <ul>
          {this.props.flashcards.map(flashcard => (
            <li className="writing-practise-words" key={flashcard.english}>
              <span className="writing-practise-word ">
                {flashcard.english}
              </span>
              <span className="writing-practise-word writing-practise-word-light">
                {flashcard.english}
              </span>
              <span className="writing-practise-word writing-practise-word-light">
                {flashcard.english}
              </span>
              <span className="writing-practise-word writing-practise-word-light">
                {flashcard.english}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards)
  };
}

export default connect(mapStateToProps)(WritingWorksheet);
