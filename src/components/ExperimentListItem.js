import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";

class ExperimentListItem extends Component {
  handleOnClick = name => {
    this.props.dispatch(updateCurrentExperiment(name));
  };

  render() {
    return (
      <li>
        <button onClick={() => this.handleOnClick(this.props.name)}>
          {this.props.name}
        </button>
      </li>
    );
  }
}

export default connect()(ExperimentListItem);
