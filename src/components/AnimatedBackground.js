import React, { Component } from "react";
import "./AnimatedBackground.css";
import { emojiSrc } from "../utils/helpers";

class AnimatedBackground extends Component {
  render() {
    return (
      <div className="AnimatedBackground">
        <img
          src={emojiSrc("1f31e")}
          className={"AnimatedBackground-sun"}
          alt={"sun"}
        />
        <img
          src={emojiSrc("2601")}
          className={"AnimatedBackground-cloud AnimatedBackground-cloud-1"}
          alt={"cloud"}
        />
        <img
          src={emojiSrc("2601")}
          className={"AnimatedBackground-cloud AnimatedBackground-cloud-2"}
          alt={"cloud"}
        />
        <img
          src={emojiSrc("2601")}
          className={"AnimatedBackground-cloud AnimatedBackground-cloud-3"}
          alt={"cloud"}
        />
        <img
          src={emojiSrc("2601")}
          className={"AnimatedBackground-cloud AnimatedBackground-cloud-4"}
          alt={"cloud"}
        />
      </div>
    );
  }
}

export default AnimatedBackground;
