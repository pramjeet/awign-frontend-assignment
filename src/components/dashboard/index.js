import React from "react";
import { Link } from "react-router-dom";
import DashboardItem from "./dashboard-item";
const Dashboard = ({ noOfInterns, noOfActiveTasks, noOfActiveProjects }) => (
  <div className="container" style={{ width: 400 }}>
    <Link to="/interns">
      <DashboardItem count={noOfInterns} title={"Interns"} />
    </Link>
    <Link to="/tasks">
      <DashboardItem count={noOfActiveTasks} title={"Tasks"} />
    </Link>
    <Link to="/projects">
      <DashboardItem count={noOfActiveProjects} title={"Projects"} />
    </Link>
  </div>
);

export default Dashboard;
