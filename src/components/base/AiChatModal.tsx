import styled from "styled-components";
import { theme } from "../../style/theme";
import cross_img from "../../assets/cross-img.svg";
import dog_3d from "../../assets/dog_img_3d.svg";
import AI_logo from "../../assets/YeomijiAiLogoFull.svg";

const AiChatModal = () => {
  return (
    <ChatContainer>
      <TopContainer>
        <Title>
          <Question>당신에게 잘 맞는 반려 견종을 찾아보세요</Question>
          <p>Ai가 당신에게 맞는 애견을 찾아드려요</p>
        </Title>
        <CloseButton>
          <img src={cross_img} alt="" />
        </CloseButton>
      </TopContainer>

      <img src={dog_3d} />

      <BottomSection>
        <ContinueButton>시작하기</ContinueButton>
        <SignatureContainer>
          <img src={AI_logo} alt="" />
          <p>개인정보 처리방침 및 사용약관</p>
        </SignatureContainer>
      </BottomSection>
    </ChatContainer>
  );
};

const CloseButton = styled.button`
  border: none;
  background-color: ${theme.color.white};
  cursor: pointer;
`;
const SignatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${theme.color.black};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const ContinueButton = styled.button`
  width: 480px;
  height: 80px;
  background-color: #86b2f5;
  border: none;
  border-radius: 23px;
  color: ${theme.color.white};
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
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
`;

export default AiChatModal;
