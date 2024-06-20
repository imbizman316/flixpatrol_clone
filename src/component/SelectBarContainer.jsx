import React, { useEffect, useState } from "react";
import SelectBar from "./SelectBar";

function SelectBarContainer({ bars }) {
  const [barSelected, setBarSelected] = useState([]);

  useEffect(() => {
    const newBarSelected = [];

    bars &&
      bars.length &&
      bars.forEach((bar) =>
        newBarSelected.push({ name: bar, selected: false })
      );

    setBarSelected(newBarSelected);
  }, []);

  function handleSelect(type) {
    const temp = [];

    barSelected &&
      barSelected.length &&
      barSelected.forEach((item) => {
        if (item.name === type) {
          temp.push({ ...item, selected: !item.selected });
        } else {
          temp.push({ ...item, selected: false });
        }
      });

    setBarSelected(temp);
  }

  function handleAllClose() {
    const temp = [];

    barSelected.forEach((item) => {
      temp.push({ ...item, selected: false });
    });

    setBarSelected(temp);
  }

  return (
    <div className="flex flex-row gap-1">
      {bars.map((bar, i) => (
        <SelectBar
          key={i}
          type={bar}
          barSelected={barSelected}
          setBarSelected={setBarSelected}
          handleSelect={handleSelect}
          handleAllClose={handleAllClose}
        />
      ))}
    </div>
  );
}

export default SelectBarContainer;
