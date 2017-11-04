import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCounts } from "../../selectors";
import { fetchAll } from "../../actions";
import Dashboard from "../../components/dashboard";

const mapStateToProps = state => {
  return {
    counts: getAllCounts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAll: () => dispatch(fetchAll())
  };
};

class Home extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }
  render() {
    return (
      <Dashboard
        noOfInterns={this.props.counts.internsCount}
        noOfActiveTasks={523}
        noOfActiveProjects={84}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
