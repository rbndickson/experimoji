import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Menu from "./Menu";
import Experiment from "./Experiment";
import { css, cx } from "emotion";

const AppMainWrapperStyles = css`
  max-width: 580px;
  margin: 0 auto;
`;

const AppMainStyles = css`
  position: relative;
  background-color: #fff;
  max-width: 580px;
  margin: 0 5px;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

const AppMainPrintModifier = css`
  max-width: none;
  width: 100%;
`;

class AppMain extends Component {
  render() {
    return (
      <div
        className={
          this.props.currentExperiment === "Writing Practise Worksheet"
            ? cx(AppMainWrapperStyles, AppMainPrintModifier)
            : AppMainWrapperStyles
        }
      >
        <main
          className={
            this.props.currentExperiment === "Writing Practise Worksheet"
              ? cx(AppMainStyles, AppMainPrintModifier)
              : AppMainStyles
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
