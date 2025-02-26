import React from "react";
import WelcomeBanner from "../components/MainPage/WelcomeBanner";
import styled from "styled-components";
import HelpYeomiji from "../components/MainPage/HelpYeomiji";
import AdoptNTC from "../components/MainPage/AdoptNTC";

const HomepageMain = () => {
  return (
    <StyledSection>
      <WelcomeBanner />
      <HelpYeomiji />
      <AdoptNTC />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export default HomepageMain;
