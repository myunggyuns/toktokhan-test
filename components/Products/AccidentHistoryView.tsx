import React, { useState } from "react";
import ButtonComponent from "../Commons/ButtonComponents";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { enterAccident, selectIsAccident } from "../../redux/action/UIAction";

type StoreState = {
  productReducer: {
    content: string;
    isAccident: boolean;
  };
};

const AccidentHistoryView = () => {
  const content = useSelector(
    (state: StoreState) => state.productReducer.content
  );
  const isAccident = useSelector(
    (state: StoreState) => state.productReducer.isAccident
  );
  const dispatch = useDispatch();

  const onClick = (e: any, key: string) => {
    e.preventDefault();
    if (key === "is") {
      dispatch(selectIsAccident(true));
    } else {
      dispatch(selectIsAccident(false));
    }
  };

  const inputAccident = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    dispatch(enterAccident(value));
  };

  return (
    <Root>
      <Content>
        <Title>사고이력</Title>
        <ButtonGroup>
          <div>
            <ButtonComponent
              clicked={isAccident}
              onClick={e => onClick(e, "is")}
            >{`사고 이력 있음`}</ButtonComponent>
          </div>
          <div>
            <ButtonComponent
              clicked={!isAccident}
              onClick={e => onClick(e, "not")}
            >{`사고 이력 없음`}</ButtonComponent>
          </div>
        </ButtonGroup>
      </Content>
      <Content>
        <Title>수리내역</Title>
        <div>
          <TextArea
            placeholder="구체적인 내용을 입력해주세요"
            onChange={inputAccident}
            value={content}
          />
        </div>
      </Content>
    </Root>
  );
};

export default AccidentHistoryView;

const Root = styled.div`
  margin-top: 16px;
  width: 100%;
`;

const Content = styled.div`
  margin-bottom: 20px;
  textarea::placeholder {
    color: rgb(150, 150, 150);
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.53px;
  }
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.63px;
  color: rgb(68, 68, 68);
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    width: 49%;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 99px;
  resize: none;
  background-color: rgb(247, 247, 247);
  border: none;
  padding-left: 13px;
  padding-top: 11px;
`;
