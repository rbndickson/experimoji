import React, { Component } from "react";
import { connect } from "react-redux";
import { emojiSrc } from "../utils/helpers";
import Background from "./Background";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import "./App.css";

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
      <div className="App">
        <Background />
        <AppHeader />
        <AppMain />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentExperiment: state.experiments.currentExperiment,
    flashcards: Object.values(state.flashcards)
  };
}

export default connect(mapStateToProps)(App);
