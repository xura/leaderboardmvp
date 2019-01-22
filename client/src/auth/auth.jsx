import React, { Component } from "react";
import * as ROUTES from "../constants/routes";
import axios from "axios";
import { connect } from "react-redux";
import Loader from "../components/loader";

export default Module => {
  class ComposedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null
      };
    }

    protectRoute = () => {
      const { auth, history } = this.props;
      if (!auth) {
        history.push(ROUTES.SIGN_IN);
      }
    };

    getContext = () => {
      axios
        .get(`http://localhost:3000/api/user/`, {
          headers: {
            Authorization: this.props.auth
          }
        })
        .then(response => {
          this.setState({ user: response.data });
        });
    };

    componentDidMount() {
      this.protectRoute();
      this.getContext();
    }

    componentDidUpdate() {
      this.protectRoute();
    }

    render() {
      const { user } = this.state;
      return !!user ? <Module {...this.props} user={user} /> : <Loader />;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth.authenticated };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
