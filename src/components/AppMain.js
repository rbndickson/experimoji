import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { emojiSrc } from "../utils/helpers";
import Menu from "./Menu";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";
import Worksheet from "./worksheet/Worksheet";
import WordSearch from "./wordsearch/WordSearch";
import Pictionary from "./pictionary/Pictionary";

class AppMain extends Component {
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
      <main>
        <Route exact path="/" component={Menu} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/memorygame" component={Memory} />
        <Route path="/worksheet" component={Worksheet} />
        <Route path="/wordsearch" component={WordSearch} />
        <Route path="/pictionary" component={Pictionary} />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    flashcards: Object.values(state.flashcards)
  };
}

export default withRouter(connect(mapStateToProps)(AppMain));
