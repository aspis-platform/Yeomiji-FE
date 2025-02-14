import React from "react";
import styled from "styled-components";
import HowToVolunteer from "./HowToVolunteer";
import VolunteerAPL from "./VolunteerAPL";

const MainVolunteer = () => {
  return (
    <VltContainer>
      <TextSection>
        <HowToVolunteer />
        <VolunteerAPL />

        {/* 

        <TextContainer>
          <TitleText>준비물</TitleText>
        </TextContainer>

        <TextContainer>
          <TitleText>주의 사항(꼭 숙지해주세요)</TitleText>
        </TextContainer> */}
      </TextSection>
    </VltContainer>
  );
};

const TextSection = styled.section`
  width: 100vw;
  padding: 0 26%;
  display: flex;
  flex-direction: column;
  gap: 88px;
`;
const VltContainer = styled.section`
  width: 100vw;
  height: 100%;
  padding: 80px 0 128px;
`;

export default MainVolunteer;
