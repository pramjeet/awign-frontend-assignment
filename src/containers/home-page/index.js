import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCounts } from "../../selectors";
import { fetchAll } from "../../actions";
import Dashboard from "../../components/dashboard";

class Home extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }
  render() {
    const { internsCount, tasksCount, projectsCount } = this.props.counts;
    return (
      <div>
        <Dashboard
          noOfInterns={internsCount}
          noOfActiveTasks={tasksCount}
          noOfActiveProjects={projectsCount}
        />
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
