import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { shuffle } from "../../utils/helpers";
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

const headingStyles = css`
  font-size: 36px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
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
        <h1 className={headingStyles}>Pictionary</h1>
        <Wordlist words={this.words()} />
        {this.state.pictures && <PictureGrid pictures={this.state.pictures} />}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards).slice(0, 16)
  };
}

export default connect(mapStateToProps)(Pictionary);
