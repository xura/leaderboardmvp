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
  }
];

const Authenticated = ({ history }) => {
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

export default withRouter(Authenticated);
