import React, { Component } from "react";
import Leaderboard from "../../components/leaderboard";
import Page from "../../components/page";
import axios from "axios";
import "./landing.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "left"
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
    align: "right"
  }
];

export default class Landing extends Component {
  state = {
    data: null,
    isLoading: true
  };

  getLeaderboard = () => {
    this.setState({ isLoading: true });
    axios.get("http://localhost:3000/api/leaderboard/public").then(response =>
      this.setState({
        data: this.modelData(response.data),
        isLoading: false
      })
    );
  };

  modelData = payload => {
    const data = [];
    const payloadKeys = Object.keys(payload);
    for (let i = 0; i < payloadKeys.length; i++) {
      const index = payloadKeys[i];
      data.push({
        name: index,
        score: payload[index]
      });
    }
    data.sort((a, b) => b.score - a.score);
    return data;
  };

  componentDidMount() {
    this.getLeaderboard();
  }

  render() {
    const title = () => "Public Leaderboard";
    const { data } = this.state;
    return (
      <Page bordered>
        <Leaderboard data={data} columns={columns} title={title} />
      </Page>
    );
  }
}
