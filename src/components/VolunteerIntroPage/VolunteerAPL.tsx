import React from "react";
import styled from "styled-components";

const VolunteerAPL = () => {
  return (
    <TextContainer>
      <TitleText>1365 봉사등록 신청</TitleText>
      <TextBox>
        <p>1365 가입후 만식만(스태프님) 에게 연락</p>
      </TextBox>
    </TextContainer>
  );
};

const TextBox = styled.div``;
const TitleText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  font-size: 20px;
`;

export default VolunteerAPL;
