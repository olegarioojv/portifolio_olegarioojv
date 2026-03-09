import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  padding: 20px 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const NavLogo = styled.div`
  font-size: 22px;
  font-weight: bold;

  background: linear-gradient(90deg, #00dbde, #fc00ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavMenu = styled.ul<{ $open: boolean }>`
  display: flex;
  gap: 40px;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;

    height: 100vh;
    width: 220px;

    flex-direction: column;
    align-items: flex-start;

    padding: 100px 30px;
    gap: 25px;

    transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
    background: #191919;
    opacity: 0.9;

    transition: transform 0.3s ease-in-out;

    z-index: 1000;
  }
`;

export const NavItem = styled.li`
  font-size: 14px;

  a {
    text-decoration: none;
    color: #a0a0a0;

    &:hover {
      background: linear-gradient(90deg, #00dbde, #fc00ff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const NavLinks = styled.a`
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

export const NavSocial = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
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

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  flex-direction: column;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
