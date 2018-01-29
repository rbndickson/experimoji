import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import AppHeader from "./AppHeader";
import Menu from "./Menu";
import Experiment from "./Experiment";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        {this.props.currentExperiment === "None" ? (
          <Route path="/" component={Menu} />
        ) : (
          <Experiment name={this.props.currentExperiment} />
        )}
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
