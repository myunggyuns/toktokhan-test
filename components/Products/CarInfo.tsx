import React, { useState } from "react";
import ButtonComponent from "../Commons/ButtonComponents";
import styled from "styled-components";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCarCompany,
  selectForeignCar,
} from "../../redux/action/UIAction";

type StoreState = {
  productReducer: {
    company: string;
    foreignCar: boolean;
  };
};

const CarInfo = () => {
  const company = useSelector(
    (state: StoreState) => state.productReducer.company
  );
  const foreignCar = useSelector(
    (state: StoreState) => state.productReducer.foreignCar
  );
  const dispatch = useDispatch();

  const onClick = (e: any, key: string) => {
    e.preventDefault();
    dispatch(selectCarCompany(key));
  };

  const onClickForeignCar = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectForeignCar(e.target.checked));
  };

  const readImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    var reader = new FileReader();
    console.log(e.target.files);
  };

  return (
    <Root>
      <div className="company">
        <Content>
          <Title>제조사</Title>
          <SubTitle>
            <div>외제차의 경우 체크하세요</div>
            <input
              type="checkbox"
              onChange={onClickForeignCar}
              checked={foreignCar}
            />
          </SubTitle>
        </Content>
        <ButtonGroup>
          {["현대", "르노 삼성", "기아", "쌍용", "GM 대우", "기타"].map(
            (item, index) => (
              <div key={index}>
                <ButtonComponent
                  onClick={e => onClick(e, item)}
                  clicked={company === item ? true : false}
                >
                  {item}
                </ButtonComponent>
              </div>
            )
          )}
        </ButtonGroup>
      </div>
      <div>
        <Content>
          <Title>차량사진</Title>
          <SubTitle>
            <div>10개 등록 가능</div>
            <div className="car-count">0/10</div>
          </SubTitle>
        </Content>
        <ImageBox>
          <div className="file-box">
            <label htmlFor="ex_file">
              <img src={"/images/icon_plus_grey.png"} alt={""}></img>
            </label>
            <input
              id="ex_file"
              type="file"
              multiple
              accept="image/*"
              onChange={readImageFile}
            />
          </div>
        </ImageBox>
      </div>
    </Root>
  );
};

export default CarInfo;

const Root = styled.div`
  width: 100%;
  .company {
    margin-bottom: 12px;
  }
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.63px;
  color: rgb(68, 68, 68);
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -0.46px;
  color: rgb(150, 150, 150);
  div {
    margin-right: 10px;
  }
  .car-count {
    color: rgb(34, 148, 227);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    width: 32.1%;
    margin-bottom: 7px;
  }
`;

const ImageBox = styled.div`
  div {
    width: 115px;
    height: 115px;
  }
  .file-box label {
    width: 115px;
    height: 115px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(34, 148, 227, 0.17);
    border-radius: 10px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .file-box input[type="file"] {
    /* 파일 필드 숨기기 */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
