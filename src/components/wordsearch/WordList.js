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
  }
`;

class WordList extends Component {
  render() {
    return (
      <ul className={styles}>
        {this.props.words.map(word => <li key={word}>{word}</li>)}
      </ul>
    );
  }
}

export default WordList;
