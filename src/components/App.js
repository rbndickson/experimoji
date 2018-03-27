import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { emojiSrc } from "../utils/helpers";
import Background from "./Background";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Menu from "./Menu";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";
import Worksheet from "./worksheet/Worksheet";
import WordSearch from "./wordsearch/WordSearch";
import { css } from "emotion";

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
`;

class App extends Component {
  componentDidMount() {
    this.preloadImages();
  }

  preloadImages() {
    this.props.flashcards.forEach(e => {
      let imageObject = new Image();
      imageObject.src = emojiSrc(e.emojiCode);
    });
  }

  render() {
    return (
      <div className={styles}>
        <Background />
        <AppHeader />
        <Route exact path="/" component={Menu} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/memorygame" component={Memory} />
        <Route path="/worksheet" component={Worksheet} />
        <Route path="/wordsearch" component={WordSearch} />
        <AppFooter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards)
  };
}

export default withRouter(connect(mapStateToProps)(App));
