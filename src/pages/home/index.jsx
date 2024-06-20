import React from "react";
import TopMoviesBox from "./components/TopMoviesBox";
import SelectBar from "../../component/SelectBar";
import SelectBarContainer from "../../component/SelectBarContainer";

function Home() {
  const today = new Date().toDateString();

  return (
    <div className="h-screen bg-gray-700 text-white">
      <h1 className="text-3xl">TOP 10 on Streaming in the World</h1>
      <p>
        Daily updated VOD charts for 823 streaming platforms in 160 countries
        worldwide. Netflix TOP 10, Amazon Best Sellers & more.
      </p>
      <p>Last updated on {today}</p>

      <div>
        <SelectBarContainer bars={["mediaType"]} />
      </div>

      <div className="mt-20 grid-cols-3 grid gap-3">
        <TopMoviesBox />
        <TopMoviesBox />
        <TopMoviesBox />
      </div>
    </div>
  );
}

export default Home;
