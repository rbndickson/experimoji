import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../../utils/helpers";
import PrintPage from "../PrintPage";
import WorksheetRow from "./WorksheetRow";

class WorksheetPage extends Component {
  state = {
    rightFlashcards: [],
    leftFlashcards: []
  };

  componentDidMount() {
    const start = this.props.pageIndex * this.props.rowsPerPage;
    const leftFlashcards = this.props.flashcards.slice(
      start,
      start + this.props.rowsPerPage
    );
    const rightFlashcards = shuffle(leftFlashcards);

    this.setState({
      leftFlashcards: leftFlashcards,
      rightFlashcards: rightFlashcards
    });
  }

  render() {
    return (
      <PrintPage key={`page${this.props.pageIndex}`}>
        <ul>
          {this.state.leftFlashcards.map((flashcard, i) => (
            <WorksheetRow
              key={flashcard.vocabulary}
              flashcardLeft={flashcard}
              flashcardRight={this.state.rightFlashcards[i]}
            />
          ))}
        </ul>
      </PrintPage>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards)
  };
}

export default connect(mapStateToProps)(WorksheetPage);
