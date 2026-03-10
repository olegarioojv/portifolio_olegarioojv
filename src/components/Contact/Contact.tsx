import { Github, Linkedin } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  ContactContainer,
  ContactContent,
  ContactSocial,
  ContactText,
  SocialIcon,
} from "./Contact.styled";

import { NavLogo } from "../NavBar/Navbar.styled";

const Contact = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <ContactContainer $isContactPage={isContactPage}>
      {!isContactPage && <NavLogo>@olegarioojv</NavLogo>}

      <ContactContent $isContactPage={isContactPage}>
        <ContactText $isContactPage={isContactPage}>
          +55 035 99191-6370
        </ContactText>

        <ContactText $isContactPage={isContactPage}>
          olegarioo.dev@gmail.com
        </ContactText>

        <ContactSocial>
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
        </ContactSocial>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
