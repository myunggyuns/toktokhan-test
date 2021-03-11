import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useDispatch, useSelector } from "react-redux";
import { enterCarPrice } from "../../redux/action/UIAction";
import { addComma, isNumber } from "../../utils/ConvertDateUtil";

type StoreState = {
  productReducer: {
    carPrice: string;
  };
};

const PriceView = () => {
  const dispatch = useDispatch();
  const price = useSelector(
    (state: StoreState) => state.productReducer.carPrice
  ).toString();
  const converPrice = addComma(price);

  const inputPrice = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    if (!isNumber(value)) {
      return;
    }
    dispatch(enterCarPrice(value));
  };

  return (
    <Root>
      <div>
        <Content>
          <Title>가격 제시하기</Title>
          <SubTitle>희망 가격을 제시해 주세요</SubTitle>
        </Content>
        <TextArea>
          <TextField
            fullWidth={true}
            className="text-field"
            InputProps={{
              endAdornment: (
                <InputAdornment position={"end"}>만원</InputAdornment>
              ),
            }}
            onChange={inputPrice}
            placeholder={`0`}
            value={converPrice}
          />
        </TextArea>
      </div>
    </Root>
  );
};

export default PriceView;

const Root = styled.div`
  width: 100%;
  margin-bottom: 32px;
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
`;

const TextArea = styled.div`
  div {
    height: 49px;
  }
  input {
    text-align: right;
  }
`;
