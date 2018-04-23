import React, { Component } from "react";
import { css } from "emotion";
import Emoji from "./Emoji";
import AnswerBox from "./AnswerBox";

const styles = css`
  display: inline-block;
`;

class PictureGrid extends Component {
  render() {
    return (
      <div>
        {this.props.pictures.map(picture => (
          <div key={picture.emojiCode} className={styles}>
            <Emoji emojiCode={picture.emojiCode} altText={picture.vocabulary} />
            <AnswerBox />
          </div>
        ))}
      </div>
    );
  }
}

export default PictureGrid;
