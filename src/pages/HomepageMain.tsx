import React from "react";
import WelcomeBanner from "../components/homepage/WelcomeBanner";
import styled from "styled-components";
import HelpYeomiji from "../components/homepage/HelpYeomiji";
import AdoptNTC from "../components/homepage/AdoptNTC";

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
  height: 100vh;
`;

export default HomepageMain;
