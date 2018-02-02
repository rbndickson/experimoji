import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";
import { emojiSrc } from "../utils/helpers";
import "./AppHeader.css";

class AppHeader extends Component {
  goHome = () => {
    this.props.dispatch(updateCurrentExperiment("None"));
  };

  render() {
    return (
      <header className="AppHeader">
        <div className="AppHeader-col">
          <img
            src={emojiSrc("1f3e0")}
            alt="Home button"
            className={"AppHeader-home-icon"}
            onClick={() => {
              this.goHome();
            }}
          />
        </div>
        <div className="AppHeader-col" />
        <div className="AppHeader-col" />
      </header>
    );
  }
}

export default connect()(AppHeader);
