import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { shuffle } from "../../utils/helpers";
import Title from "../Title";
import WorksheetRow from "./WorksheetRow";

const mainStyles = css`
  position: relative;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

const pageStyles = css`
  page-break-inside: avoid;
`;

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
      <div id="Worksheet" className={mainStyles}>
        <Title text={`${this.props.language} - ${this.props.category}`} />
        {this.state.flashcards &&
          this.state.flashcards.map((page, i) => (
            <div key={`page${i}`} className={pageStyles}>
              <ul>
                {page.map((flashcard, ii) => (
                  <WorksheetRow
                    key={flashcard.vocabulary}
                    flashcardLeft={flashcard}
                    flashcardRight={this.state.shuffledFlashcards[i][ii]}
                  />
                ))}
              </ul>
            </div>
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
