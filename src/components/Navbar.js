import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/LogoStratChampions128x128.png";

const activeStyle = {
  color: "#F3E996",
  border: "5px solid #F3E996",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  paddingBottom: "5px",
};

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <NavLink exact to="/home">
        <img src={Logo} alt="Strat Champions logo" className="nav-logo"></img>
      </NavLink>

      <div className="nav-links">
        <NavLink
          exact
          to="/home"
          className="nav-link"
          activeStyle={activeStyle}
        >
          HOME
        </NavLink>

        <NavLink
          exact
          to="/champions"
          className="nav-link"
          activeStyle={activeStyle}
        >
          CHAMPIONS
        </NavLink>

        <NavLink
          exact
          to="/newsletter"
          className="nav-link"
          activeStyle={activeStyle}
        >
          NEWSLETTER
        </NavLink>

        <NavLink
          exact
          to="/community"
          className="nav-link"
          activeStyle={activeStyle}
        >
          COMMUNITY
        </NavLink>

        <NavLink exact to="/download" className="nav-link clickable">
          <button className="nav-download-btn clickable">DOWNLOAD FREE</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
