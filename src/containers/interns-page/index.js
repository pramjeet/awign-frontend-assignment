import React, { Component } from "react";
import { connect } from "react-redux";

import InternsTable from "../../components/interns-table";

class InternsPage extends Component {
  render() {
    return <InternsTable interns={[]} />;
  }
}

export default InternsPage;
