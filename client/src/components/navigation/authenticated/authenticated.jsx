import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const paths = [
  {
    value: "LANDING",
    path: ROUTES.LANDING
  },
  {
    value: "DASHBOARD",
    path: ROUTES.DASHBOARD
  },
  {
    value: "CONTESTS",
    path: ROUTES.CONTEST
  },
  {
    value: "SIGN OUT",
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
