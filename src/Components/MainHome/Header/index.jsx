import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          FELIXBIM
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="activeNavItem"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/Home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeNavItem"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeNavItem"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="activeNavItem"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/Login"
              >
                Login
              </NavLink>
            </li>

            <div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Bài Tập
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/toDoListRCC">
                    TodoListRCC
                  </NavLink>
                  <NavLink className="dropdown-item" to="/toDoListRFC">
                    TodoListRFC
                  </NavLink>
                </div>
              </li>
              ;
            </div>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

<li class="nav-item dropdown">
  <a
    class="nav-link dropdown-toggle"
    href="#"
    id="dropdownId"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Dropdown
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownId">
    <a class="dropdown-item" href="#">
      Action 1
    </a>
    <a class="dropdown-item" href="#">
      Action 2
    </a>
  </div>
</li>;
