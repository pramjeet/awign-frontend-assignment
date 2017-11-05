import React, { Component } from "react";
import { connect } from "react-redux";
import TasksTable from "../../components/tasks-table";
import Header from "../../components/header";
import { fetchTasks } from "../../actions/tasks-actions";

class TasksPage extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
  render() {
    const { tasks, isFetchingTasks, fetchingTasksErrorMsg } = this.props;

    return (
      <div>
        <Header title="Tasks" />
        <div className="container">
          {isFetchingTasks && <p>Loading..</p>}
          {!isFetchingTasks &&
            !fetchingTasksErrorMsg && <TasksTable tasks={tasks} />}
          {!isFetchingTasks &&
            fetchingTasksErrorMsg && (
              <p className="text-danger">{fetchingTasksErrorMsg}</p>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasksState.tasks,
    isFetchingTasks: state.tasksState.isFetchingTasks,
    fetchingTasksErrorMsg: state.tasksState.fetchingTasksErrorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
