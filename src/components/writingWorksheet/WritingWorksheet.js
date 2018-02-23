import React, { Component } from "react";
import { connect } from "react-redux";
import "./WritingWorksheet.css";

class WritingWorksheet extends Component {
  render() {
    return (
      <div className="WritingWorksheet-container">
        <h2>Animals</h2>
        <ul>
          {this.props.flashcards.map(flashcard => (
            <li className="WritingWorksheet-line" key={flashcard.vocabulary}>
              <span className="WritingWorksheet-word ">
                {flashcard.vocabulary}
              </span>
              <span className="WritingWorksheet-word WritingWorksheet-word-light">
                {flashcard.vocabulary}
              </span>
              <span className="WritingWorksheet-word WritingWorksheet-word-light">
                {flashcard.vocabulary}
              </span>
              <span className="WritingWorksheet-word WritingWorksheet-word-light">
                {flashcard.vocabulary}
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
