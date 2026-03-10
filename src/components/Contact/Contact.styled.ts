import styled from "styled-components";

interface ContactProps {
  $isContactPage?: boolean;
}

export const ContactContainer = styled.div<ContactProps>`
  width: 100%;
  max-width: ${({ $isContactPage }) => ($isContactPage ? "100%" : "1200px")};

  margin: 0 auto;
  padding: 30px 60px;

  display: flex;
  align-items: center;
  justify-content: ${({ $isContactPage }) =>
    $isContactPage ? "center" : "space-between"};

  min-height: ${({ $isContactPage }) => ($isContactPage ? "100dvh" : "auto")};
  flex-direction: ${({ $isContactPage }) =>
    $isContactPage ? "column" : "row"};

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const ContactContent = styled.div<ContactProps>`
  display: flex;
  align-items: center;
  gap: ${({ $isContactPage }) => ($isContactPage ? "20px" : "40px")};

  flex-direction: ${({ $isContactPage }) =>
    $isContactPage ? "column" : "row"};

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const ContactText = styled.p<ContactProps>`
  color: #a6a6a6;
  font-size: ${({ $isContactPage }) =>
    $isContactPage ? "clamp(28px, 4vw, 40px)" : "12px"};
`;

export const ContactSocial = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.div`
  width: 32px;
  height: 32px;

  background: #a7a7a7;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.3s;

  a {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 18px;
    height: 18px;
    color: #1a1a1a;
  }

  &:hover {
    background: linear-gradient(90deg, #00dbde, #fc00ff);
  }
`;

export const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 1px;

  background: #2a2a2a;

  margin: 20px auto;
`;

export const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 20px 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    padding: 20px;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const FooterItem = styled.li`
  font-size: 14px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #a0a0a0;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(90deg, #00dbde, #fc00ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FooterCopyright = styled.p`
  font-size: 12px;
  color: #a6a6a6;

  span {
    color: #a855f7;
  }
`;
