import React from "react";
import "./AppHeader.css";

const AppHeader = () => (
  <header>
    <h1 className="App-title">Experimoji</h1>
  </header>
);

function mapStateToProps(state) {
  return {
    currentExperiment: state.experiments.currentExperiment
  };
}

export default AppHeader;
