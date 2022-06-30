import React, { Component } from "react";
import { css } from "@emotion/css"

const baseStyles = css`
  box-sizing: border-box;
`;

const inlineStyles = css`
  width: 1em;
  height: 1em;
  margin: 0 5px;
  vertical-align: -0.1em;
`;

class Emoji extends Component {
  emojiSrc(emojiCode) {
    return `https://twemoji.maxcdn.com/2/svg/${emojiCode}.svg`;
  }

  styles() {
    return this.props.inline
      ? css(baseStyles, this.props.styles, inlineStyles)
      : css(baseStyles, this.props.styles);
  }

  render() {
    return (
      <img
        className={this.styles()}
        alt={`${this.props.altText} emoji`}
        src={this.emojiSrc(this.props.emojiCode)}
      />
    );
  }
}

export default Emoji;
