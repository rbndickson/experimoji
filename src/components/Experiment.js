import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";

class Experiment extends Component {
  goHome = () => {
    this.props.dispatch(updateCurrentExperiment("None"));
  };

  render() {
    return (
      <main>
        <h1>{this.props.name}</h1>
        <button onClick={this.goHome}>Home</button>
      </main>
    );
  }
}

export default connect()(Experiment);
