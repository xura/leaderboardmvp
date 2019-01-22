import axios from "axios";
import { AUTH_SUCCESS, AUTH_ERROR } from "./types";

export const signin = (formProps, callback) => async dispatch => {
  try {
    axios
      .post(`http://localhost:3000/api/user/login`, {
        email: formProps.email,
        password: formProps.password
      })
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: AUTH_SUCCESS, payload: response.data.token });
          sessionStorage.setItem("token", response.data.token);
          callback();
        } else {
          dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
        }
      });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const register = (formProps, callback) => async dispatch => {
  try {
    axios
      .post(`http://localhost:3000/api/user/register`, {
        email: formProps.email,
        password: formProps.password
      })
      .then(registerResponse => {
        if (registerResponse.status === 200) {
          axios
            .post(`http://localhost:3000/api/user/login`, {
              email: formProps.email,
              password: formProps.password
            })
            .then(response => {
              if (response.status === 200) {
                dispatch({ type: AUTH_SUCCESS, payload: response.data.token });
                sessionStorage.setItem("token", response.data.token);
                callback();
              } else {
                dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
              }
            });
        } else {
          dispatch({ type: AUTH_ERROR, payload: "Registration Failed." });
        }
      });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Registration Failed." });
  }
};

export const signout = () => {
  sessionStorage.removeItem("token");

  return {
    type: AUTH_SUCCESS,
    payload: ""
  };
};
