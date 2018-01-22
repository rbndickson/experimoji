import React, { Component } from "react";
import ExperimentListHeader from "./ExperimentListHeader";

class ExperimentList extends Component {
  state = {
    experiments: [{ name: "Quiz" }, { name: "Memory Game" }]
  };

  render() {
    return (
      <div>
        <ExperimentListHeader />
        <ul>{this.state.experiments.map(e => <li>{e.name}</li>)}</ul>
      </div>
    );
  }
}

export default ExperimentList;
