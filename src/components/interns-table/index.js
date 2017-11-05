import React from "react";
import { Link } from "react-router-dom";

const InternsTable = ({ interns = [] }) => (
  <div className="table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>No. of tasks</th>
          <th>No. of projects</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {interns.map(intern => (
          <tr key={intern.id}>
            <td>{intern.id}</td>
            <td>{intern.name}</td>
            <td>{intern.tasksCount}</td>
            <td>{intern.projectsCount}</td>
            <td>
              <Link to={"/" + intern.id}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InternsTable;
