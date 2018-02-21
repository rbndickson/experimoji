import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentExperiment } from "../actions";
import { emojiSrc } from "../utils/helpers";
import { css } from "emotion";

const AppHeaderStyles = css`
  display: flex;
  justify-content: space-between;

  .AppHeader-col {
    width: 33.33%;
  }

  .AppHeader-home-icon {
    width: 35px;
    height: 35px;
    float: left;
    margin: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .AppHeader-home-icon:hover {
    transform: scale(1.1);
  }
`;

class AppHeader extends Component {
  goHome = () => {
    this.props.dispatch(updateCurrentExperiment("None"));
  };

  render() {
    return (
      <header className={AppHeaderStyles}>
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
