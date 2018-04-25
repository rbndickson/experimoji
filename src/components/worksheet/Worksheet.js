import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../../utils/helpers";
import Title from "../Title";
import PrintPage from "../PrintPage";
import WorksheetRow from "./WorksheetRow";

class Worksheet extends Component {
  state = {
    shuffledFlashcards: []
  };

  componentDidMount() {
    const ROWS_PER_PAGE = 10;
    const pages = Math.ceil(this.props.flashcards.length / ROWS_PER_PAGE);
    let flashcards = [];

    for (let i = 0; i < pages; i++) {
      flashcards.push(
        this.props.flashcards.slice(i * ROWS_PER_PAGE, (i + 1) * ROWS_PER_PAGE)
      );
    }

    const shuffledFlashcards = flashcards.map(fs => shuffle(fs));

    this.setState({
      flashcards: flashcards,
      shuffledFlashcards: shuffledFlashcards
    });
  }

  render() {
    return (
      <div id="Worksheet">
        <Title text={`${this.props.language} - ${this.props.category}`} />
        {this.state.flashcards &&
          this.state.flashcards.map((page, i) => (
            <PrintPage key={`page${i}`}>
              <ul>
                {page.map((flashcard, ii) => (
                  <WorksheetRow
                    key={flashcard.vocabulary}
                    flashcardLeft={flashcard}
                    flashcardRight={this.state.shuffledFlashcards[i][ii]}
                  />
                ))}
              </ul>
            </PrintPage>
          ))}
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

export default connect(mapStateToProps)(Worksheet);
