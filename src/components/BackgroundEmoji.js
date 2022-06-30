import React, { Component } from "react";
import { css } from "@emotion/css"
import { emojiSrc } from "../utils/helpers";

const styles = css`
  .sun {
    width: 10%;
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 1;
  }

  .cloud {
    position: fixed;
    z-index: 1;
  }

  .cloud-1 {
    width: 10%;
    top: 10%;
    right: 14%;
  }

  .cloud-2 {
    width: 12%;
    top: 20%;
    left: 15%;
  }

  .cloud-3 {
    width: 15%;
    top: 40%;
    left: 50%;
  }

  .cloud-4 {
    width: 11%;
    top: 30%;
    right: -20%;
  }
`;

class BackgroundEmoji extends Component {
  render() {
    return (
      <div className={"non-print"}>
        <div className={styles}>
          <img src={emojiSrc("1f31e")} className={"sun"} alt={"sun"} />
          <img
            src={emojiSrc("2601")}
            className={"cloud cloud-1"}
            alt={"cloud"}
          />
          <img
            src={emojiSrc("2601")}
            className={"cloud cloud-2"}
            alt={"cloud"}
          />
          <img
            src={emojiSrc("2601")}
            className={"cloud cloud-3"}
            alt={"cloud"}
          />
          <img
            src={emojiSrc("2601")}
            className={"cloud cloud-4"}
            alt={"cloud"}
          />
        </div>
      </div>
    );
  }
}

export default BackgroundEmoji;
