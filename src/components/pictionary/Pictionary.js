import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { shuffle } from "../../utils/helpers";
import Title from "../Title";
import Wordlist from "./WordList";
import PictureGrid from "./PictureGrid";

const mainStyles = css`
  position: relative;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

class Pictionary extends Component {
  state = {
    pictures: shuffle(this.props.flashcards)
  };

  words() {
    return this.props.flashcards.map(flashcard => flashcard.vocabulary);
  }

  render() {
    return (
      <main className={mainStyles}>
        <Title
          text={`${this.props.language} ${this.props.category} Pictionary`}
        />
        <Wordlist words={this.words()} />
        {this.state.pictures && <PictureGrid pictures={this.state.pictures} />}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.worksheet.category,
    language: state.worksheet.language,
    flashcards: Object.values(state.flashcards).slice(0, 16)
  };
}

export default connect(mapStateToProps)(Pictionary);
