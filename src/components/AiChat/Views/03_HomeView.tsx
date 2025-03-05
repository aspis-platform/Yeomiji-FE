import React from "react";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import AI_logo from "../../../assets/YeomijiAiLogoFull.svg";
import APT_img from "../../../assets/APT_img.svg";
import Villa_img from "../../../assets/Villa_img.svg";
import house_img from "../../../assets/house_img.svg";

interface HomeSelectScreenProps {
  home: string;
  onSelectHome: (home: string) => void;
  onNext: () => void;
}

const HomeView: React.FC<HomeSelectScreenProps> = ({
  home,
  onSelectHome,
  onNext,
}) => {
  return (
    <>
      <InputContainer>
        <input
          type="text"
          placeholder="직업을 입력하세요"
          value={home}
          onChange={(e) => onSelectHome(e.target.value)}
        />
      </InputContainer>

      <OptionContainer>
        <SelectionButton
          value={"아파트"}
          onClick={(e) => onSelectHome(e.target.value)}
        >
          <img src={APT_img} />
          <TextContainer>
            <BigText>아파트</BigText>
            <p>Apartment</p>
          </TextContainer>
        </SelectionButton>

        <SelectionButton>
          <img src={Villa_img} />
          <TextContainer>
            <BigText>빌라</BigText>
            <p>Villa</p>
          </TextContainer>
        </SelectionButton>

        <SelectionButton>
          <img src={house_img} />
          <TextContainer>
            <BigText>단독 주택</BigText>
            <p>House</p>
          </TextContainer>
        </SelectionButton>
      </OptionContainer>

      <BottomSection>
        <ContinueButton onClick={onNext}>다음</ContinueButton>
        <SignatureContainer>
          <img src={AI_logo} alt="AI 로고" />
          <p>개인정보 처리방침 및 사용약관</p>
        </SignatureContainer>
      </BottomSection>
    </>
  );
};

const BigText = styled.h4`
  font-size: 20px;
  color: black;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 16px;
  font-weight: 600;
  color: #9c9c9c;
`;

const SelectionButton = styled.button`
  width: 460px;
  height: 92px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  padding-left: 10px;

  img {
    width: 80px;
    height: 80px;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    padding: 20px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 20px;

    &::placeholder {
      color: #bbbbbb;
    }
  }
`;

const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
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

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${theme.color.black};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export default HomeView;
