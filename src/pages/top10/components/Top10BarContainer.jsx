import React, { useEffect, useState } from "react";
import { top10 } from "../../../data";

function Top10BarContainer({ platform, type }) {
  const [date, setDate] = useState("");
  const [top10data, setTop10data] = useState([]);
  const [maxWidth, setMaxwidth] = useState(0);

  function sortTop10(data) {
    const sorted = data.sort(function (a, b) {
      return a.views - b.views;
    });

    const reverted = sorted.toReversed().slice(0, 10);

    return reverted;
  }

  useEffect(() => {
    setDate(new Date().toDateString());

    const sorted = sortTop10(top10[platform][type]);

    setTop10data(sorted);
    setMaxwidth(sorted[0].views);
  }, [platform, type]);

  return (
    <div className="my-10">
      <h1 className="text-2xl text-white">TOP Movies on Netflix on {date}</h1>
      <div className="flex flex-col text-white bg-gray-700 px-5">
        {top10data &&
          top10data.length &&
          top10data.map((item, index) => {
            const progressWidth = Math.trunc(200 * (item.views / maxWidth));

            return (
              <div className="flex flex-row justify-between" key={index}>
                <div className="flex flex-row gap-3">
                  <h1>{index + 1}</h1>
                  <h1>{item.title}</h1>
                </div>
                <div className="flex flex-row">
                  <div>{item.views}</div>
                  <div className="bg-gray-950 w-[200px] h-[20px]">
                    <div
                      className="bg-sky-600 h-[20px]"
                      style={{ width: progressWidth }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Top10BarContainer;
