import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import Wordlist from "./WordList";

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
  render() {
    return (
      <main className={mainStyles}>
        <h1 className={headingStyles}>Pictionary</h1>
        <Wordlist words={this.props.words} />
      </main>
    );
  }
}

function mapStateToProps(state) {
  let flashcards = Object.values(state.flashcards);

  return {
    words: flashcards.map(e => e.vocabulary).slice(0, 16),
    emojiCodes: flashcards.map(e => e.emojiCode)
  };
}

export default connect(mapStateToProps)(Pictionary);
