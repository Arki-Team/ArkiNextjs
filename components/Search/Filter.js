import React, { useState } from "react";
import {
  FilterContainer,
  VRadio as Radio,
  Button,
  RadioGroup,
  Radiowrapper,
} from "./SearchElemnts";
import CirclePicker from "./ColorPicker";
import { Slider } from "antd";
const Filter = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  // const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();

  const onChange1 = (e) => {
    console.log("radio1 checked", e.target.value);
    setValue1(e.target.value);
  };
  const onChange2 = (e) => {
    console.log("radio2 checked", e.target.value);
    setValue2(e.target.value);
  };
  // const onChange3 = (e) => {
  //   console.log("radio3 checked", e.target.value);
  //   setValue3(e.target.value);
  // };
  const onChange4 = (e) => {
    console.log("radio4 checked", e.target.value);
    setValue4(e.target.value);
  };

  return (
    <>
      <FilterContainer>
        {" "}
        {/* <Slider
          min={0}
          max={10000}
          defaultValue={[0, 100]}
          range
          style={{ width: "150px", margin: "0 1rem" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "10px" }}>0SAR </div>

          <div style={{ fontSize: "10px", paddingLeft: "6.5rem" }}>
            {" "}
            10000SAR{" "}
          </div>
        </div> */}
        <Radiowrapper>
          <h2> Catagory</h2>
          <RadioGroup onChange={onChange1} value={value1}>
            <Radio value={1}>Mobile Phones</Radio>
            <Radio value={2}>Laptops</Radio>
            <Radio value={3}>Computer Supplies</Radio>
            <Radio value={3}>Headphones</Radio>
          </RadioGroup>
        </Radiowrapper>
        <Radiowrapper>
          {" "}
          <h2>Brand</h2>
          <RadioGroup onChange={onChange2} value={value2}>
            <Radio value={1}>Apple</Radio>
            <Radio value={2}>Asus</Radio>
            <Radio value={3}>Dell</Radio>
            <Radio value={4}>Msi</Radio>
            <Radio value={5}>Acer</Radio>
          </RadioGroup>
        </Radiowrapper>
        <Radiowrapper>
          <h2 style={{marginBottom:'2rem'}} >Color</h2>
          <CirclePicker />
        </Radiowrapper>
        <Radiowrapper>
          <h2>Shops</h2>
          <RadioGroup onChange={onChange4} value={value4}>
            <Radio value={1}>Amazon.sa</Radio>
            <Radio value={2}>Jarir Bookstore</Radio>
            <Radio value={3}>Extra</Radio>
            <Radio value={4}>Aleph</Radio>
            <Radio value={5}>Noon</Radio>
          </RadioGroup>
        </Radiowrapper>
        <div>
          <Button>Apply</Button>
        </div>
      </FilterContainer>
    </>
  );
};

export default Filter;
