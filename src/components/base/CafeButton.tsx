import styled from "styled-components";
import naverLogo from "../../assets/naver-cafe-logo.webp";

const BlogButton = () => {
  return (
    <StyledBlogButton>
      <StyledImage src={naverLogo} alt="Naver Cafe Logo" />
      <span>블로그</span>
    </StyledBlogButton>
  );
};

const StyledBlogButton = styled.button`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 4px;
  background-color:rgb(255, 255, 255);
  color: white;
  transition: transform 0.2s ease;

  span {
    font-size: 16px;
    color:black;
    font-weight: 500;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;


export default BlogButton;