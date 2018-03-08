import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import "./Worksheet.css";
import { shuffle } from "../../utils/helpers";
import WorksheetRow from "./WorksheetRow";

const headingStyles = css`
  font-size: 36px;
`;

class Worksheet extends Component {
  state = {
    shuffledFlashcards: []
  };

  componentWillMount() {
    this.setState({
      shuffledFlashcards: shuffle(this.props.flashcards)
    });
  }

  render() {
    return (
      <div id="Worksheet">
        <h2 className={headingStyles}>{`${this.props.language} - ${
          this.props.category
        }`}</h2>
        <ul>
          {this.props.flashcards.map((flashcard, i) => (
            <WorksheetRow
              key={flashcard.vocabulary}
              flashcardLeft={flashcard}
              flashcardRight={this.state.shuffledFlashcards[i]}
            />
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

export default connect(mapStateToProps)(Worksheet);
