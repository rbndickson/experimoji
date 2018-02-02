import React, { Component } from "react";
import { connect } from "react-redux";
import AnimatedBackground from "./AnimatedBackground";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import "./App.css";
import { emojiSrc } from "../utils/helpers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimatedBackground />
        <AppHeader />
        <AppMain />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentExperiment: state.experiments.currentExperiment
  };
}

export default connect(mapStateToProps)(App);
