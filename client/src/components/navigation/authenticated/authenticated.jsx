import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const paths = [
  {
    value: "landing",
    path: ROUTES.LANDING
  },
  {
    value: "dashboard",
    path: ROUTES.DASHBOARD
  },
  {
    value: "sign out",
    path: ROUTES.SIGN_OUT
  }
];

const Authenticated = ({ history }) => {
  return (
    <div className="navigation">
      <div className="menu">
        {paths.map((item, index) => (
          <Link
            key={index}
            className={item.path === "/signout" ? "menu-items-right" : "menu-items"}
            to={item.path}
          >
            {item.value}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Authenticated);
