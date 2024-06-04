import React, { useEffect, useRef, useState } from "react";
import { platforms, countries, durations } from "../data";

function SelectBar({
  type,
  barSelected,
  setBarSelected,
  handleSelect,
  handleAllClose,
}) {
  const dropDownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      console.log("hey");
      handleAllClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let showChildren = barSelected?.find((bar) => bar.name === type).selected;
  console.log(showChildren);

  // barSelected?.forEach((bar) => {
  //   if (bar.name === type) {
  //     showChildren = bar.selected;
  //   }
  // });

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
    <div ref={dropDownRef} className="relative inline-block">
      <div>{showChildren.toString()}</div>
      <div
        className="bg-gray-900 w-[8em] px-2 py-1 text-white hover:bg-gray-500 duration-300"
        onClick={() => handleSelect(type)}
      >
        <div>{dataType.header}</div>
      </div>

      <div
        className={`absolute mt-2 w-48 shadow-lg rounded transition-all duration-200 ease-in-out transform origin-top ${
          showChildren
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-0 invisible"
        }`}
      >
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

      {/* {showChildren && (
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
      )} */}
    </div>
  );
}

export default SelectBar;
