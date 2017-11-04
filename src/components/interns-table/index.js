import React from "react";
import { Link } from "react-router-dom";

const InternsTable = ({ interns = [] }) => (
  <div className="table">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>No. of tasks</th>
      <th>No. of projects</th>
    </tr>
    {interns.map(intern => (
      <tr>
        <td>{intern.id}</td>
        <td>{intern.name}</td>
        <td>{intern.tasksCount}</td>
        <td>{intern.projectsCount}</td>
      </tr>
    ))}
  </div>
);

export default InternsTable;
