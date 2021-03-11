import React from "react";
import styled from "styled-components";

const Bottombar = () => {
  return <BottomButton>판매 등록하기</BottomButton>;
};

export default Bottombar;

const BottomButton = styled.button`
  width: 100%;
  height: 62px;
  border: none;
  background-color: rgb(34, 148, 227);
  color: #ffffff;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -1.1px;
  outline: none;
`;
