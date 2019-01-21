import axios from "axios";
import { AUTH_SUCCESS, AUTH_ERROR } from "./types";
import { notification } from "antd";

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios({
      method: "post",
      url: `http://localhost:3000/api/user/login`,
      data: { email: formProps.email, password: formProps.password }
    });

    if (response.status === 200) {
      dispatch({ type: AUTH_SUCCESS, payload: response.data.token });
      sessionStorage.setItem("token", response.data.token);
      callback();
    } else {
      dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
    }
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  sessionStorage.removeItem("token");
  notification.success({
    message: "Successfully Logged Out.",
    description: `Please Login Again to Continue`
  });
  return {
    type: AUTH_SUCCESS,
    payload: ""
  };
};
