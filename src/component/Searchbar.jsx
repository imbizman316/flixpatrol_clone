import React, { useContext, useState } from "react";
import { GlobalContext, GlobalState } from "../context";

function Searchbar() {
  const { searchMovie } = useContext(GlobalContext);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    searchMovie(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-[13px] w-[200px] text-black"
        placeholder="Search for movies or TV shows..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </form>
  );
}

export default Searchbar;
