import React from "react";
import { CirclePicker } from "react-color";

const ColorPicker = () => {
  const handleChangeComplete = (color) => {
    //  console.log(color);
  };

  return <CirclePicker width={"80%"} onChange={handleChangeComplete} />;
};

export default ColorPicker;
