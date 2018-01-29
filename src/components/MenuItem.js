import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";
import Button from "./Button";

class MenuItem extends Component {
  handleOnClick = name => {
    this.props.dispatch(updateCurrentExperiment(name));
  };

  render() {
    return (
      <li>
        <Button
          onClick={() => this.handleOnClick(this.props.name)}
          text={this.props.name}
        />
      </li>
    );
  }
}

export default connect()(MenuItem);
