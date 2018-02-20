import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Menu from "./Menu";
import Experiment from "./Experiment";
import "./AppMain.css";

class AppMain extends Component {
  render() {
    return (
      <div className="AppMain-wrapper">
        <main
          className={
            this.props.currentExperiment === "Writing Practise Worksheet"
              ? "AppMain AppMain-print"
              : "AppMain"
          }
        >
          {this.props.currentExperiment === "None" ? (
            <Route path="/" component={Menu} />
          ) : (
            <Experiment name={this.props.currentExperiment} />
          )}
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentExperiment: state.experiments.currentExperiment
  };
}

export default connect(mapStateToProps)(AppMain);
