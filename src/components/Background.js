import React, { Component } from "react";
import { css } from "emotion";
import { emojiSrc } from "../utils/helpers";

const styles = css`
  .Background-sun {
    width: 10%;
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 1;
  }

  .Background-cloud {
    position: fixed;
    z-index: 1;
  }

  .Background-cloud-1 {
    width: 10%;
    top: 10%;
    right: 14%;
  }

  .Background-cloud-2 {
    width: 12%;
    top: 20%;
    left: 15%;
  }

  .Background-cloud-3 {
    width: 15%;
    top: 40%;
    left: 50%;
  }

  .Background-cloud-4 {
    width: 11%;
    top: 30%;
    right: -20%;
  }
`;

class Background extends Component {
  render() {
    return (
      <div className={styles}>
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
