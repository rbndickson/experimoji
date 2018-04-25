import React, { Component } from "react";
import { css } from "emotion";

const styles = css`
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;

  li {
    display: inline-block;
    padding: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

class WordList extends Component {
  render() {
    return (
      <ul className={styles}>
        {this.props.words.map((word, i) => (
          <li key={`${i}-${word}`} id={word}>
            {word}
          </li>
        ))}
      </ul>
    );
  }
}

export default WordList;
