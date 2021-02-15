import React from "react";
import { Dropdown, Button, Menu } from "antd";
import Filter from "./Filter";
import { FilterOutlined } from "@ant-design/icons";

const FilterButton = () => {
  const menu = (
    <Menu style={{ width: "70%" }}>
      <Filter></Filter>
    </Menu>
  );

  return (
    <div id="1s">
      <Dropdown
        overlayStyle={{ zIndex: 1 }}
        overlay={menu}
        placement="bottomCenter"
        arrow
      >
        <Button>
          <FilterOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default FilterButton;
