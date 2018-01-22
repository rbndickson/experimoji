import React, { Component } from "react";
import { Route } from "react-router-dom";
import ExperimentList from "./ExperimentList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Experimoji</h1>
        </header>
        <Route path="/" component={ExperimentList} />
      </div>
    );
  }
}

export default App;
