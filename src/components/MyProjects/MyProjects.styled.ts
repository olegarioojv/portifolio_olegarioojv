import styled from "styled-components";
export const MyProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const MyProjectsCard = styled.div`
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  background: #1e1e1e;
  border: 1px solid #3a3a3a;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
`;

export const MyProjectsImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center center;
  display: block;
  transition: transform 0.3s ease;
`;

export const MyProjectsContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MyProjectsTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

export const MyProjectsDescription = styled.p`
  font-size: 13px;
  color: #a7a7a7;
  line-height: 1.5;
`;

export const MyProjectsTechnology = styled.p`
  font-size: 12px;
  color: #9b9b9b;

  span {
    font-weight: 700;
    color: #b0b0b0;
  }
`;

export const MyProjectsAction = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 6px;
  justify-content: space-around;
`;

export const MyProjectsLink = styled.a`
  color: #ffffff;
  font-size: 13px;
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  &:hover {
    color: #cccccc;
  }
`;
