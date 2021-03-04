import React from "react";
import { Dropdown, Button, Menu, Drawer } from "antd";
import Filter from "./Filter";
import { FilterOutlined } from "@ant-design/icons";

class  FilterButton extends React.Component {
  state = { visible: false, placement: 'left' };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };

 
  render(){
    const menu = (
      <Menu style={{ width: "70%" }}>
        <Filter></Filter>
      </Menu>
    );
    const { placement, visible } = this.state;
    return (
      <div id="1s">
        <Drawer 
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          bodyStyle={{width:'370px'}}
        
          key={placement} >{menu}</Drawer>
        <Button
          onClick={this.showDrawer}
          size="large"
          style={{
            borderRadius: "10px",
            background: "#6f72fc",
            border: "none",
            width: "3rem",
            fontWeight: "600",
          }}
        >
          <FilterOutlined style={{ color: "white" }} />
        </Button>
      </div>
    );
  }


};

export default FilterButton;
