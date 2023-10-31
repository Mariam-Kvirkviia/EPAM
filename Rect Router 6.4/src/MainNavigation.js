import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function MainNavigation() {
  return (
    <div>
      MainNavigation
      <NavLink
        to="events"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Events Page
      </NavLink>
      <Outlet />
    </div>
  );
}

export default MainNavigation;
