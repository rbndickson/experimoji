import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";

class MenuItem extends Component {
  render() {
    return (
      <li>
        <Link to={`/${this.props.link}`} style={{ textDecoration: "none" }}>
          <Button text={this.props.name} />
        </Link>
      </li>
    );
  }
}

export default connect()(MenuItem);
