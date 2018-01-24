import React, { Component } from "react";
import { connect } from "react-redux";

class Memory extends Component {
  render() {
    return (
      <main>
        <section>Match the pictures with the words</section>
      </main>
    );
  }
}

export default connect()(Memory);
