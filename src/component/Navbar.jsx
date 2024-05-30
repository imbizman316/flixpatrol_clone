import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-800 h-[50px] text-white flex items-center justify-between px-10">
      <div className="flex flex-row gap-10">
        <Link to="/">FlixPatrol</Link>
        <Link to="/top10">TOP 10</Link>
      </div>
      <div className="flex flex-row gap-5">
        <form>
          <input
            className="text-[13px] w-[200px]"
            placeholder="Search for movies or TV shows..."
          ></input>
        </form>
        <Link to="/signin">Sign in</Link>
      </div>
    </div>
  );
}

export default Navbar;
