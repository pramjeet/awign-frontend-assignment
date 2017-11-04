import React from "react";
import { Link } from "react-router-dom";
import DashboardItem from "./dashboard-item";
const Dashboard = ({ noOfInterns, noOfActiveTasks, noOfActiveProjects }) => (
  <div className="container" style={{ width: 400 }}>
    <Link to="/interns">
      <DashboardItem
        count={noOfInterns}
        title={"Interns"}
        smallText={"working on"}
      />
    </Link>
    <Link to="/interns">
      <DashboardItem
        count={noOfActiveTasks}
        title={"Tasks"}
        smallText={"active"}
      />
    </Link>
    <Link to="/interns">
      <DashboardItem
        count={noOfActiveProjects}
        title={"Projects"}
        smallText={"going on"}
      />
    </Link>
  </div>
);

export default Dashboard;
