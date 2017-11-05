import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectsTable from "../../components/projects-table";
import Header from "../../components/header";
import { fetchProjects } from "../../actions/projects-actions";

class ProjectsPage extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    const {
      projects,
      isFetchingProjects,
      fetchingProjectsErrorMsg
    } = this.props;

    return (
      <div>
        <Header title="Projects" />
        <div className="container">
          {isFetchingProjects && <p>Loading..</p>}
          {!isFetchingProjects &&
            !fetchingProjectsErrorMsg && <ProjectsTable projects={projects} />}
          {!isFetchingProjects &&
            fetchingProjectsErrorMsg && (
              <p className="text-danger">{fetchingProjectsErrorMsg}</p>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projectsState.projects,
    isFetchingProjects: state.projectsState.isFetchingProjects,
    fetchingProjectsErrorMsg: state.projectsState.fetchingProjectsErrorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
