import React, { Component } from "react";
import BackgroundEmoji from "./BackgroundEmoji";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppMain from "./AppMain";
import { css } from "@emotion/css"

const styles = css`
  text-align: center;
  font-family: "Varela Round", sans-serif;
  background-image: url("/em-bg.png");
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  padding-bottom: 30px;

  fieldset {
    border: 0;
    margin: 0 0 20px 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  @media print {
    min-height: auto;
  }
`;

class App extends Component {
  render() {
    return (
      <div className={styles}>
        <BackgroundEmoji />
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    );
  }
}

export default App;
