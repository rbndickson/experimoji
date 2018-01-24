import React, { Component } from "react";
import { connect } from "react-redux";
import "./memory.css";
import { shuffle } from "../../utils/helpers";

class Memory extends Component {
  emojiSrc(emojiCode) {
    return `https://twemoji.maxcdn.com/2/svg/${emojiCode}.svg`;
  }

  render() {
    let cards = this.props.flashcards.reduce((acc, e) => {
      acc.push({ english: e.english });
      acc.push({ emojiCode: e.emojiCode });
      return acc;
    }, []);

    cards = shuffle(cards);

    return (
      <main>
        <p>Match the pictures with the words</p>
        <div className="memory-flashcards-container">
          <ul className="memory-flashcards">
            {cards.map(
              flashcard =>
                flashcard.english ? (
                  <li key={flashcard.english} className="memory-flashcard">
                    {flashcard.english}
                  </li>
                ) : (
                  <li key={flashcard.emojiCode} className="memory-flashcard">
                    <img alt="" src={this.emojiSrc(flashcard.emojiCode)} />
                  </li>
                )
            )}
          </ul>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  const flashcards = Object.values(state.flashcards).slice(0, 4);
  return { flashcards: flashcards };
}

export default connect(mapStateToProps)(Memory);
