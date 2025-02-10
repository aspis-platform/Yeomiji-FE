import React from "react";
import DonateButton from "../MainButton/DonateButton";
import AdoptButton from "../MainButton/AdoptButton";
import VolunteerButton from "../MainButton/VolunteerButton";
import styled from "styled-components";
import { theme } from "../../style/theme";

const HelpYeomiji = () => {
  return (
    <StyledContainer>
      <TitleContainer>
        <p>여수 여미지 보호소 돕기</p>
      </TitleContainer>
      <ButtonContainer>
        <DonateButton />
        <AdoptButton />
        <VolunteerButton />
      </ButtonContainer>
    </StyledContainer>
  );
};

const ButtonContainer = styled.div`
  width: 100vw;
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TitleContainer = styled.div`
  padding-left: 10%;
  width: 100vh;
  color: ${theme.color.black};
  font-size: 20px;
  font-weight: 600;
`;
const StyledContainer = styled.section`
  padding: 76px 0 180px 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 116px;

  @media (max-width: 768px) {
    padding: 66px 0 140px 0;
    gap: 100px;
  }
`;

export default HelpYeomiji;
