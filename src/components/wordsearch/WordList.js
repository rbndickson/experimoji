import React, { Component } from "react";
import { css } from "emotion";

const styles = css`
  width: 600px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;
  li {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

class WordList extends Component {
  render() {
    return this.props.words.length > 0 ? (
      <ul className={styles}>
        {this.props.words.map((word, i) => (
          <li
            key={`${i}-${word}`}
            id={word}
            onClick={e => this.props.removeWord(e.target.id)}
          >
            {word}
          </li>
        ))}
      </ul>
    ) : (
      <p>Add words to create your word search</p>
    );
  }
}

export default WordList;
