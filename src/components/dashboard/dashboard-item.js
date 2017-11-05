import React from "react";

const DashboardItem = ({ count, title }) => (
  <div className="card" style={{ margin: "20px" }}>
    <div className="card-body">
      <span className="h2">{count}</span>
      <span className="h3"> {title}</span>
    </div>
  </div>
);

export default DashboardItem;
