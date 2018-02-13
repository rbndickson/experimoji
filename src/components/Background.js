import React, { Component } from "react";
import "./Background.css";
import { emojiSrc } from "../utils/helpers";

class Background extends Component {
  render() {
    return (
      <div className="Background">
        <img src={emojiSrc("1f31e")} className={"Background-sun"} alt={"sun"} />
        <img
          src={emojiSrc("2601")}
          className={"Background-cloud Background-cloud-1"}
          alt={"cloud"}
        />
        <img
          src={emojiSrc("2601")}
          className={"Background-cloud Background-cloud-2"}
          alt={"cloud"}
        />
        <img
          src={emojiSrc("2601")}
          className={"Background-cloud Background-cloud-3"}
          alt={"cloud"}
        />
        <img
          src={emojiSrc("2601")}
          className={"Background-cloud Background-cloud-4"}
          alt={"cloud"}
        />
      </div>
    );
  }
}

export default Background;
