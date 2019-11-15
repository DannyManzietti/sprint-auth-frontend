import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="navigation">
      <NavLink to="/jokes">Jokes</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
    </div>
  );
};

export default Navigation;
