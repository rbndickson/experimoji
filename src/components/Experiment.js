import React, { Component } from "react";
import { connect } from "react-redux";

class Experiment extends Component {
  render() {
    return (
      <main>
        <h1>{this.props.name}</h1>
      </main>
    );
  }
}

export default connect()(Experiment);
