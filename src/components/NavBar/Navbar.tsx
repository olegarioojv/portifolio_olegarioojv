import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavSocial,
  SocialIcon,
  Hamburger,
} from "./Navbar.styled";

import { Github, Linkedin } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavContainer ref={menuRef} id="home">
      <NavLogo>{`{777}`} olegarioojv</NavLogo>

      <Hamburger onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <NavMenu $open={open}>
        <NavItem>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            Sobre mim
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/myTechnologies" onClick={() => setOpen(false)}>
            Tecnologias
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/myProjects" onClick={() => setOpen(false)}>
            Projetos
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contatos
          </NavLink>
        </NavItem>
      </NavMenu>

      <NavSocial>
        <SocialIcon>
          <a
            href="https://github.com/olegarioojv"
            target="_blank"
            rel="noopener noreferrer">
            <Github />
          </a>
        </SocialIcon>

        <SocialIcon>
          <a
            href="https://www.linkedin.com/in/olegariojv/"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin />
          </a>
        </SocialIcon>
      </NavSocial>
    </NavContainer>
  );
}

export default Navbar;
