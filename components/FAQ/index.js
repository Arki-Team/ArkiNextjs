import React from "react";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { FAQWrapper, sPanel as Panel } from "./FAQElemnts";


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FAQ = () => {
  return (
    <>
    
      <FAQWrapper id='faq' >
          <h1>FAQ</h1>
        <Collapse 
        style={{width:'60%',background: '#fff'}}
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <PlusOutlined  rotate={isActive ? 45 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="01.  Urna Dolor Felis Commodo Fusce Condimentum Semper. Efficitur In Arcu Curabitur?"
            key="1"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="01.  Urna Dolor Felis Commodo Fusce Condimentum Semper. Efficitur In Arcu Curabitur?"
            key="2"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="01.  Urna Dolor Felis Commodo Fusce Condimentum Semper. Efficitur In Arcu Curabitur?"
            key="3"
            className="site-collapse-custom-panel"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        
      </FAQWrapper>
    </>
  );
};

export default FAQ;
