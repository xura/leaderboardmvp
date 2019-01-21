import React, { Component } from "react";
import { connect } from "react-redux";
import Authenticated from "./authenticated";
import UnAuthenticated from "./unauthenticated";
import "./navigation.css";

class Navigation extends Component {
  render() {
    const { authenticated } = this.props;
    return authenticated ? <Authenticated /> : <UnAuthenticated />;
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Navigation);
