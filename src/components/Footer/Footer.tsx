import { NavLink } from "react-router-dom";
import {
  Divider,
  FooterBottom,
  FooterCopyright,
  FooterItem,
  FooterMenu,
} from "./Footer.styled";

function Footer() {
  return (
    <>
      <Divider />
      <FooterBottom>
        <FooterMenu>
          <FooterItem>
            <NavLink to="/">Home</NavLink>
          </FooterItem>
          <FooterItem>
            <NavLink to="/about">Sobre mim</NavLink>
          </FooterItem>
          <FooterItem>
            <NavLink to="/myTechnologies">Tecnologias</NavLink>
          </FooterItem>
          <FooterItem>
            <NavLink to="/myProjects">Projetos</NavLink>
          </FooterItem>
          <FooterItem>
            <NavLink to="/contact">Contatos</NavLink>
          </FooterItem>
        </FooterMenu>

        <FooterCopyright>
          Projetado e construído por <span>João Victor</span>
        </FooterCopyright>
      </FooterBottom>
    </>
  );
}

export default Footer;
