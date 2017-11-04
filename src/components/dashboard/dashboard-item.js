import React from "react";

const DashboardItem = ({ count, title, smallText }) => (
  <div class="card" style={{ margin: "20px" }}>
    <div class="card-body">
      <span className="h2">{count}</span>
      <span className="h3"> {title}</span>
      <span className="p"> {smallText}</span>
    </div>
  </div>
);

export default DashboardItem;
