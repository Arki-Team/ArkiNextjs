import styled from "styled-components";

import { Collapse } from "antd";
const { Panel } = Collapse;
// export const Container = styled.div``;

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export const sPanel = styled(Panel)`
  /* height: 94px; */
  border-radius: 10px;
  border: none;
  outline: none;
  background: #fff;
  box-shadow: 0px 0px 10px 10px rgba(190, 190, 190, 0.05);
  margin: 1rem 0;
`;
