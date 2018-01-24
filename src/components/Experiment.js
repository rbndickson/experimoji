import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";
import Quiz from "./quiz/Quiz";
import Memory from "./memory/Memory";

class Experiment extends Component {
  goHome = () => {
    this.props.dispatch(updateCurrentExperiment("None"));
  };

  render() {
    return (
      <main>
        <h1>{this.props.name}</h1>
        {this.props.name === "Quiz" && <Quiz />}
        {this.props.name === "Memory Game" && <Memory />}
        <button onClick={this.goHome}>Home</button>
      </main>
    );
  }
}

export default connect()(Experiment);
