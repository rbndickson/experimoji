import React, { Component } from "react";
import { connect } from "react-redux";
import "./WritingWorksheet.css";

class WritingWorksheet extends Component {
  render() {
    return (
      <div className="WritingWorksheet">
        <h2>{`${this.props.language} - ${this.props.category}`}</h2>
        <ul>
          {this.props.flashcards.map(flashcard => (
            <li key={flashcard.vocabulary}>
              <div className="pure-g">
                <div className="pure-u-1-3">{flashcard.vocabulary}</div>
                <div className="pure-u-1-12">*</div>
                <div className="pure-u-1-12">*</div>
                <div className="pure-u-1-3">*</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards),
    category: state.worksheet.category,
    language: state.worksheet.language
  };
}

export default connect(mapStateToProps)(WritingWorksheet);
