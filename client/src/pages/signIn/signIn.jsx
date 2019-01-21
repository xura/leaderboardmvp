import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    if (!!token) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="forms">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset className="redux-field">
              <Field name="email" type="text" component="input" autoComplete="none" />
            </fieldset>
            <fieldset className="redux-field">
              <Field name="password" type="password" component="input" autoComplete="none" />
            </fieldset>
            <div className="buttons">
              <button className="sign-in-button">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" })
)(Signin);
