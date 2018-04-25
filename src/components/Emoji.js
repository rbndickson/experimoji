import React, { Component } from "react";
import { css } from "emotion";

class Emoji extends Component {
  emojiSrc(emojiCode) {
    return `https://twemoji.maxcdn.com/2/svg/${emojiCode}.svg`;
  }

  styles() {
    return css({ boxSizing: "border-box" }, this.props.styles);
  }

  render() {
    return (
      <img
        className={this.styles()}
        alt={`${this.props.altText} emoji` || ""}
        src={this.emojiSrc(this.props.emojiCode)}
      />
    );
  }
}

export default Emoji;
