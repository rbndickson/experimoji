import React, { Component } from "react";

class ExperimentList extends Component {
  state = {
    experiments: [{ name: "Quiz" }, { name: "Memory Game" }]
  };

  render() {
    return (
      <div>
        <p>Experimental applications for language learning with emoji</p>
        <ul>{this.state.experiments.map(e => <li>{e.name}</li>)}</ul>
      </div>
    );
  }
}

export default ExperimentList;
