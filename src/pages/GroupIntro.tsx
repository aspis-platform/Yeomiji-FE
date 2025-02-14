import React from "react";
import IntroBanner from "../components/homepage/IntroBanner";
import MainIntro from "../components/homepage/MainIntro";
import styled from "styled-components";

const GroupIntro = () => {
  return (
    <IntroPageContainer>
      <IntroBanner />
      <MainIntro />
    </IntroPageContainer>
  );
};

const IntroPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GroupIntro;
