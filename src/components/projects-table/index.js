import React from "react";
import { Link } from "react-router-dom";

const InternsTable = ({ projects = [] }) => (
  <div className="table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>No. of tasks</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.tasksCount}</td>
            <td>
              <Link to={"/" + project.id}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InternsTable;
