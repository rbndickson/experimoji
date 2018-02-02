import React, { Component } from "react";
import "./AnimatedBackground.css";
import { emojiSrc } from "../utils/helpers";

class AnimatedBackground extends Component {
  render() {
    return (
      <div className="AnimatedBackground">
        <img src={emojiSrc("1f31e")} className={"AnimatedBackground-sun"} />
        <img
          src={emojiSrc("2601")}
          className={"AnimatedBackground-cloud AnimatedBackground-cloud-1"}
        />
        <img
          src={emojiSrc("2601")}
          className={"AnimatedBackground-cloud AnimatedBackground-cloud-2"}
        />
        <img
          src={emojiSrc("2601")}
          className={"AnimatedBackground-cloud AnimatedBackground-cloud-3"}
        />
        <img
          src={emojiSrc("2601")}
          className={"AnimatedBackground-cloud AnimatedBackground-cloud-4"}
        />
      </div>
    );
  }
}

export default AnimatedBackground;
