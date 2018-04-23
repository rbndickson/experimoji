import React, { Component } from "react";
import { css } from "emotion";

const styles = css`
  height: 180px;
  width: 180px;
  padding: 30px;
  box-sizing: border-box;
`;

class Emoji extends Component {
  emojiSrc(emojiCode) {
    return `https://twemoji.maxcdn.com/2/svg/${emojiCode}.svg`;
  }

  render() {
    return (
      <img
        className={styles}
        alt={`${this.props.altText} emoji` || ""}
        src={this.emojiSrc(this.props.emojiCode)}
      />
    );
  }
}

export default Emoji;
