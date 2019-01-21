import React, { Component } from "react";
import * as ROUTES from "../constants/routes";
import { connect } from "react-redux";

export default Module => {
  class ComposedComponent extends Component {
    protectRoute = () => {
      const { auth, history } = this.props;
      if (!auth) {
        history.push(ROUTES.SIGN_IN);
      }
    };

    componentDidMount() {
      this.protectRoute();
    }

    componentDidUpdate() {
      this.protectRoute();
    }

    render() {
      return <Module {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth.authenticated };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
