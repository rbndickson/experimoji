import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";
import "./MenuItem.css";

class MenuItem extends Component {
  handleOnClick = name => {
    this.props.dispatch(updateCurrentExperiment(name));
  };

  render() {
    return (
      <li>
        <div
          className="MenuItem-button"
          onClick={() => this.handleOnClick(this.props.name)}
        >
          {this.props.name}
        </div>
      </li>
    );
  }
}

export default connect()(MenuItem);
