import React from "react";
import styled from "styled-components";

type Props = {
  children: string;
  clicked: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ButtonComponent = ({ children, clicked, onClick }: Props) => {
  return (
    <>
      <Button onClick={onClick} className={clicked ? "selected" : "none"}>
        {children}
      </Button>
    </>
  );
};

export default ButtonComponent;

const Button = styled.button`
  width: 100%;
  height: 47px;
  border-radius: 8px;
  border: ${props =>
    props.className === "none" ? "1px solid rgb(34, 148, 227)" : "none"};
  background-color: ${props =>
    props.className !== "none" ? "rgb(34, 148, 227)" : "#ffffff"};
  color: ${props =>
    props.className === "none" ? "rgb(34, 148, 227)" : "#ffffff"};
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.62px;
  outline: none;
`;
