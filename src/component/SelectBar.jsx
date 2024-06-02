import React, { useEffect, useState } from "react";
import { platforms, countries, durations } from "../data";

function SelectBar({ type, barSelected, setBarSelected, handleSelect }) {
  let showChildren = false;

  barSelected?.forEach((bar) => {
    if (bar.name === type) {
      showChildren = bar.selected;
    }
  });

  let dataType = [];

  switch (type) {
    case "platforms":
      dataType = platforms;
      break;
    case "countries":
      dataType = countries;
      break;
    case "dates":
      dataType = durations;
      break;
    default:
      dataType = [];
  }

  return (
    <div className="relative">
      <div
        className="bg-gray-900 w-[8em] px-2 py-1 text-white hover:bg-gray-500 duration-300"
        onClick={() => handleSelect(type)}
      >
        <div>{dataType.header}</div>
      </div>
      {showChildren && (
        <div className="absolute">
          {dataType.children.map((child, i) => (
            <div
              key={i}
              className="flex flex-row bg-gray-950 text-white w-[10em] px-2 py-1 hover:bg-gray-500 duration-300 gap-3"
            >
              <img
                className="w-5 h-5 object-cover"
                src={child.icon}
                alt={child.title}
              />
              <div>{child.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectBar;
