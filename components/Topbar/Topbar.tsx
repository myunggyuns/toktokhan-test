import React from "react";
import styled from "styled-components";

const Topbar = () => {
  return <TopBar>똑똑한 중고차</TopBar>;
};

export default Topbar;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  color: rgb(34, 148, 227);
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 29px;
  background-color: "#ffffff";
`;
