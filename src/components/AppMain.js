import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Menu from "./Menu";
import Experiment from "./Experiment";
import "./AppMain.css";

class AppMain extends Component {
  render() {
    return (
      <main className="AppMain">
        {this.props.currentExperiment === "None" ? (
          <Route path="/" component={Menu} />
        ) : (
          <Experiment name={this.props.currentExperiment} />
        )}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentExperiment: state.experiments.currentExperiment
  };
}

export default connect(mapStateToProps)(AppMain);
