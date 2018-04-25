import React, { Component } from "react";
import { css } from "emotion";

const styles = css`
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const wordStyles = css`
  display: inline-block;
  padding: 10px;
`;

class WordList extends Component {
  clickable() {
    return this.props.hasOwnProperty("onClick");
  }

  handleOnClick(e) {
    if (this.clickable()) {
      this.props.onClick(e.target.id);
    }
  }

  render() {
    return (
      <ul className={styles}>
        {this.props.words.map((word, i) => (
          <li
            key={`${i}-${word}`}
            id={word}
            className={
              this.clickable()
                ? css(wordStyles, { cursor: "pointer" })
                : wordStyles
            }
            onClick={e => this.handleOnClick(e)}
          >
            {word}
          </li>
        ))}
      </ul>
    );
  }
}

export default WordList;
