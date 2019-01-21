import { combineReducers } from "redux";
import { reducer } from "redux-form";
import auth from "./withAuthentcation";

export default combineReducers({
  auth,
  form: reducer
});
