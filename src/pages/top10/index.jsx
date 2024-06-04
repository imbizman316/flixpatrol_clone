import React from "react";
import { platforms } from "../../data";
import SelectBar from "../../component/SelectBar";
import SelectBarContainer from "../../component/SelectBarContainer";
import Top10BarContainer from "./components/Top10BarContainer";

function Top10() {
  const today = new Date().toDateString();

  return (
    <div className="min-h-screen bg-gray-700">
      <div className="flex flex-row items-center gap-10 sm:flex-col sm:flex">
        <h1 className=" text-white text-3xl">
          TOP 10 on Streaming in the World on {today}{" "}
        </h1>
        <SelectBarContainer bars={["platforms", "countries", "dates"]} />
      </div>
      <div className="mt-[5em]">
        <p className="text-white">
          The most popular movies and TV shows on Streaming in the World. Who
          was #1 on Streaming on June 1, 2024? TOP 10 charts or full ratings
          charts. Check the title detail for more streaming analytics.
        </p>
      </div>
      <Top10BarContainer platform={"netflix"} type={"movies"} />
      <Top10BarContainer platform={"netflix"} type={"tv"} />
    </div>
  );
}

export default Top10;
