import React, { Component } from "react";
import auth from "../../auth";
import Leaderboard from "../../components/leaderboard";
class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard <Leaderboard />
      </div>
    );
  }
}

export default auth(Dashboard);
