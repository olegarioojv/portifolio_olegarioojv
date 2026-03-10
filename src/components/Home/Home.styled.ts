import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  min-height: 70vh;

  margin: 0 auto;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* tablet */
  @media (max-width: 1024px) {
    padding: 0 30px;
  }

  /* mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    padding: 40px 20px;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const HomeIntroduction = styled.p`
  color: #d9d9d9;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HomeName = styled.span`
  background: linear-gradient(90deg, #00fdee, #8f00ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const HomeImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  padding: 4px;
  border-radius: 50%;

  background: linear-gradient(90deg, #00fdee, #8f00ff);

  img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    display: block;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
`;
