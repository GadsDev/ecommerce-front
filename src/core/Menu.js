import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout } from "../auth";
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9000" };
  } else {
    return { color: "#ffff" };
  }
};

const Menu = ({history}) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link style={isActive(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          style={isActive(history, "/signin")}
          className="nav-link"
          to="/signin"
        >
          Signin
        </Link>
      </li>

      <li className="nav-item">
        <Link
          style={isActive(history, "/signup")}
          className="nav-link"
          to="/signup"
        >
          Signup
        </Link>
      </li>

      <li className="nav-item">
        <span
          style={{ cursor: "pointer", color: "#ffffff" }}
          className="nav-link"
          onClick={() =>
            signout(() => {
              history.push("/")
            })
          }
        >
          Signout
        </span>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
