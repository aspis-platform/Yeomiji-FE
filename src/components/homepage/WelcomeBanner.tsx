import React from "react";
import styled from "styled-components";
import logo_image from "../../assets/yeomiji-logo.svg";
import BlogButton from "../base/CafeButton";
import AiChatButton from "../base/AiChatButton";
import { theme } from "../../style/theme";

const WelcomeBanner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <MainContent>
          <LogoWrapper>
            <img src={logo_image} alt="여미지 로고" />
          </LogoWrapper>
          <ContentContainer>
            <Title>여수 여미지 보호소</Title>
            <Description>
              유기동물을 사랑하는 직장인 봉사자들이
              <br />
              돌보며 후원하고 있는 여수에 위치한 사설 유기동물 보호소 입니다
            </Description>
          </ContentContainer>
        </MainContent>
        <CircleButtons>
          <BlogButton />
          <AiChatButton />
        </CircleButtons>
      </BannerContent>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: ${theme.color.main[1]};
  height: 360px;
  display: flex;
  justify-content: center;
`;

const BannerContent = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 40px 20px;
  }
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  img {
    width: 121px;
    height: 121px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${theme.color.black};
  margin: 0;
  letter-spacing: -0.5px;
`;

const Description = styled.p`
  font-size: 24px;
  color: #666;
  line-height: 1.6;
  margin: 0;
  letter-spacing: -0.3px;
`;

const CircleButtons = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default WelcomeBanner;
