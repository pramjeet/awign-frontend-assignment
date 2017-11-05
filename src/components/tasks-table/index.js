import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const InternsTable = ({ tasks = [] }) => (
  <div className="table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Project</th>
          <th>Task</th>
          <th>Due Time</th>
          <th>Is Completed?</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.project.name}</td>
            <td>{task.task}</td>
            <td>{moment(task.dueTime).format("h:mm:ss a, MMM DD, YYYY")}</td>
            <td>
              {task.isCompleted && <span className="text-success">Yes</span>}
              {!task.isCompleted && <span className="text-danger">No</span>}
            </td>
            <td>
              <Link to={"/" + task.id}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InternsTable;
