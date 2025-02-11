import React from "react";
import styled from "styled-components";

const NTCCard = () => {
  return (
    <CardContainer>
      <ImageContainer />
      <TextContainer>
        <NameContainer>
          <Name>이름</Name>
        </NameContainer>
      </TextContainer>
    </CardContainer>
  );
};

const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 65%;
  background-color: black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const CardContainer = styled.div`
  width: 280px;
  height: 360px;
  background-color: white;
  border-radius: 20px;
`;

export default NTCCard;
