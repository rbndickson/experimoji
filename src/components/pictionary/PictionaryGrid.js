import React, { Component } from "react";
import { css } from "@emotion/css"
import Emoji from "../Emoji";
import AnswerBox from "../AnswerBox";

const styles = css`
  display: inline-block;
`;

class PictionaryGrid extends Component {
  render() {
    return (
      <div>
        {this.props.pictures.map(picture => (
          <div key={picture.emojiCode} className={styles}>
            <Emoji
              emojiCode={picture.emojiCode}
              altText={picture.vocabulary}
              styles={{
                height: 180,
                width: 180,
                padding: 30
              }}
            />
            <AnswerBox styles={{ height: 40 }} />
          </div>
        ))}
      </div>
    );
  }
}

export default PictionaryGrid;
