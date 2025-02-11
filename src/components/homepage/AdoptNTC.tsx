import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import NTCCard from "../MainButton/NTCCard";

const AdoptNTC = () => {
  return (
    <NTCContainer>
      <TitleContainer>입양 공고</TitleContainer>
      <CardContainer>
        <NTCCard />
        <NTCCard />
        <NTCCard />
        <NTCCard />
      </CardContainer>
    </NTCContainer>
  );
};

const CardContainer = styled.div`
  gap: 40px;
  width: 100vw;
  padding: 0 10%;
  display: flex;
  flex-direction: row;
`;
const TitleContainer = styled.div`
  padding-left: 10%;
  width: 100vh;
  color: ${theme.color.black};
  font-size: 20px;
  font-weight: 600;
`;
const NTCContainer = styled.div`
  width: 100vw;
  height:572px;
  background-color: ${theme.color.sub[3]};
  padding: 32px 0 50px 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default AdoptNTC;
