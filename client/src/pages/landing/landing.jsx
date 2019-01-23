import React, { Component } from "react";
import Leaderboard from "../../components/leaderboard";
import Page from "../../components/page";
import "./landing.css";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "left"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    align: "right"
  }
];

export default class Landing extends Component {
  render() {
    const title = () => "Public Leaderboard";
    return (
      <Page bordered>
        <Leaderboard data={data} columns={columns} title={title} />
      </Page>
    );
  }
}
