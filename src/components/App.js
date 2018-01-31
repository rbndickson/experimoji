import React, { Component } from "react";
import { connect } from "react-redux";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
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
