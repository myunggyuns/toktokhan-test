import React, { useState } from "react";
import ButtonComponent from "../Commons/ButtonComponents";
import styled from "styled-components";
import SnackbarComponents from "../Commons/SnackbarComponents";
import { formatDate } from "../../utils/ConvertDateUtil";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/action/UIAction";

const PriceView = () => {
  const [onButton, setOnButton] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [time, setTime] = useState("");
  const dispatch = useDispatch();

  const onClose = (e: any) => {
    setSnackbarOpen(false);
  };

  const onClick = (e: any, key: string) => {
    e.preventDefault();
    if (key === "init") {
      setOnButton("init");
      dispatch(clear());
    } else {
      setOnButton("save");
      setSnackbarOpen(true);
      setTime(formatDate());
    }
  };
  return (
    <Root>
      <ButtonGroup>
        <div>
          <ButtonComponent
            onClick={e => onClick(e, "init")}
            clicked={onButton === "init"}
          >{`초기화`}</ButtonComponent>
        </div>
        <div>
          <ButtonComponent
            onClick={e => onClick(e, "save")}
            clicked={onButton === "save"}
          >{`임시저장`}</ButtonComponent>
        </div>
      </ButtonGroup>
      <AddCar>
        <div className="image-box">
          <img src={`/images/icon_plus_blue.png`} alt={""} />
        </div>
        <div>{`중고 차량 추가하기`}</div>
      </AddCar>
      <SnackbarComponents
        open={snackbarOpen}
        time={time}
        text="에 저장되었습니다."
        onClose={onClose}
      />
    </Root>
  );
};

export default PriceView;

const Root = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    width: 49%;
  }
`;

const AddCar = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 247, 247);
  border-radius: 8px;
  color: rgb(34, 148, 227);
  font-size: 15px;
  letter-spacing: -0.62px;
  line-height: 22px;
  .image-box {
    width: 24px;
    height: 24px;
    margin-right: 11px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
