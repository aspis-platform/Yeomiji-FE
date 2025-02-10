import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import dog_image from "../../assets/dog-image.svg";
import { useNavigate } from "react-router-dom";

const AdoptButton = () => {
  {
    /* 임시 경로 */
  }
  const navigate = useNavigate();
  const navigator = () => {
    navigate("/");
  };

  return (
    <ButtonContainer onClick={navigator}>
      <MainButton>
        <img src={dog_image} />
      </MainButton>
      <ButtonDesc>입양 안내</ButtonDesc>
    </ButtonContainer>
  );
};

const MainButton = styled.button`
  border: 4px solid #575757;
  background-color: ${theme.color.white};
  border-radius: 100px;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 55%;
    height: 55%;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
const ButtonDesc = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: #575757;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 222px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export default AdoptButton;
