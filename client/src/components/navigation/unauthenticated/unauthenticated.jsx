import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const paths = [
  {
    value: "LANDING",
    path: ROUTES.LANDING
  },
  {
    value: "SIGN IN",
    path: ROUTES.SIGN_IN
  },
  {
    value: "SIGN UP",
    path: ROUTES.SIGN_UP
  }
];

const UnAuthenticated = ({ history }) => {
  const { pathname } = history.location;
  return (
    <div className="navigation">
      <div className="menu">
        {paths.map((item, index) => (
          <Link
            key={index}
            className="menu-items"
            to={item.path}
            style={{ fontWeight: pathname === item.path ? "bold" : "" }}
          >
            {" "}
            {item.value}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default withRouter(UnAuthenticated);
