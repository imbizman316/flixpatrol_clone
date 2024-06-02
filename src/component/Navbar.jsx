import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-800 h-[50px] text-white flex items-center justify-between px-10">
      <div className="flex flex-row gap-10">
        <Link to="/">FlixPatrol</Link>
        <NavLink
          to="/top10"
          className={({ isActive }) => (isActive ? "bg-gray-400" : "navbutton")}
        >
          TOP 10
        </NavLink>
      </div>
      <div className="flex flex-row gap-5">
        <form>
          <input
            className="text-[13px] w-[200px]"
            placeholder="Search for movies or TV shows..."
          ></input>
        </form>
        <NavLink
          to="/signin"
          className={({ isActive }) => (isActive ? "bg-gray-400" : null)}
        >
          Sign in
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
