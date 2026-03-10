import styled from "styled-components";

export const MyTechnologiesContainer = styled.section`
  width: 100%;
  padding: 120px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyTechnologiesContent = styled.div`
  margin-top: 80px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px;

  img {
    width: 70px;
    transition: transform 0.2s ease;
  }

  /* Tablet */
  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
