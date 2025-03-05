import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import cross_img from "../../assets/cross-img.svg";
import WelcomeView from "./Views/01_WelcomeView";
import JobView from "./Views/02_JobViewView";

const AiChatModal: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [job, setJob] = useState("");

  const goToNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const screenTitles = [
    {
      title: "당신에게 잘 맞는 반려 견종을 찾아보세요",
      subtitle: "AI가 당신에게 맞는 애견을 찾아드려요"
    },
    {
      title: "직업을 알려주세요",
      subtitle: "추천에 필요합니다. AI는 개인정보를 암호화고 저장하지 않아요"
    }
  ];

  return (
    <ChatContainer>
      <TopContainer>
        <Title>
          <Question>{screenTitles[currentScreen].title}</Question>
          <p>{screenTitles[currentScreen].subtitle}</p>
        </Title>
        <CloseButton>
          <img src={cross_img} alt="닫기" />
        </CloseButton>
      </TopContainer>

      {currentScreen === 0 && (
        <WelcomeView onNext={goToNext} />
      )}

      {currentScreen === 1 && (
        <JobView
          job={job} 
          onJobChange={setJob} 
          onNext={goToNext}
        />
      )}
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  width: 554px;
  height: 668px;
  background-color: ${theme.color.white};
  border-radius: 30px;
  padding: 36px 40px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  justify-content: space-between;
  
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  img {
    width: 32px;
    height: 32px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #929292;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Question = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${theme.color.black};
`;

const CloseButton = styled.button`
  border: none;
  background-color: ${theme.color.white};
  cursor: pointer;
`;

export default AiChatModal;