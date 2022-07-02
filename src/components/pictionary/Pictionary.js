import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffle } from "../../utils/helpers";
import Title from "../Title";
import Wordlist from "../WordList";
import PictionaryGrid from "./PictionaryGrid";

class Pictionary extends Component {
  state = {
    pictures: shuffle(this.props.flashcards),
  };

  words() {
    return this.props.flashcards.map((flashcard) => flashcard.vocabulary);
  }

  render() {
    return (
      <div>
        <Title
          text={`${this.props.language} ${this.props.category} Pictionary`}
        />
        <Wordlist words={this.words()} />
        {this.state.pictures && (
          <PictionaryGrid pictures={this.state.pictures} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.worksheet.category,
    language: state.worksheet.language,
    flashcards: state.flashcards.slice(0, 16),
  };
}

export default connect(mapStateToProps)(Pictionary);
