import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import ExperimentList from "./ExperimentList";
import Experiment from "./Experiment";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Experimoji</h1>
        </header>
        {this.props.currentExperiment === "None" ? (
          <Route path="/" component={ExperimentList} />
        ) : (
          <Experiment name={this.props.currentExperiment} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentExperiment: state.currentExperiment
  };
}

export default connect(mapStateToProps)(App);
