import React from "react";
import { Table } from "antd";
import "./leaderboard.css";

const Leaderboard = ({ title, data, columns }) => {
  return <Table columns={columns} dataSource={data} size="small" title={title} />;
};

export default Leaderboard;
