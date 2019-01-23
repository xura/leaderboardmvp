import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Page from "../../components/page";
import "./signIn.css";

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
      <Page>
        <div className="sign-in">
          <div className="forms">
            <span> Please Sign In</span>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset className="redux-field">
                <Field className="input" name="email" type="text" component="input" autoComplete="none" />
              </fieldset>
              <fieldset className="redux-field">
                <Field
                  className="input"
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="none"
                />
              </fieldset>

              <div className="button">
                <button className="sign-in-button">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </Page>
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
