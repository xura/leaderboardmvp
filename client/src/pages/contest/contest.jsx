import React, { Component } from "react";
import Leaderboard from "../../components/leaderboard";
import { Tag, Button } from "antd";
import Page from "../../components/page";
import axios from "axios";
import _ from "lodash";
import FORMAT from "../../constants/format";
import auth from "../../auth";

class Contest extends Component {
  state = {
    data: null,
    isLoading: true
  };

  getContests = () => {
    this.setState({ isLoading: true });
    axios.get("http://localhost:3000/api/contest/all").then(response =>
      this.setState({
        data: response.data,
        isLoading: false
      })
    );
  };

  componentDidMount() {
    this.getContests();
  }

  render() {
    const title = () => "Public H2H Contests";
    const { data } = this.state;

    const columns = [
      {
        title: "Competitors",
        dataIndex: "competitors",
        key: "competitors",
        render: competitors => (
          <span>
            <Tag color="blue">{competitors[0]}</Tag>
            <strong>Vs. </strong>
            <Tag color="blue"> {competitors[1]}</Tag>
          </span>
        )
      },

      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: status => _.capitalize(status)
      },

      {
        title: "Format",
        dataIndex: "format",
        key: "format",
        render: format => FORMAT[format]
      },
      {
        title: "Time Left",
        dataIndex: "expiry",
        key: "expiry",
        align: "right"
      }
    ];

    return (
      <Page bordered>
        <Button style={{ marginBottom: 10 }}>Join Private Contest</Button>
        <Leaderboard data={data} columns={columns} title={title} />
      </Page>
    );
  }
}

export default auth(Contest);
