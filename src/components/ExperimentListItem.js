import React, { Component } from "react";

class ExperimentListItem extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default ExperimentListItem;
