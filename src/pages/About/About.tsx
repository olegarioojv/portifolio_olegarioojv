import { Building, Calendar, MapPin } from "lucide-react";
import {
  AboutAcademicContent,
  AboutContainer,
  AboutContainerAcademic,
  AboutDates,
  AboutExperiencesContent,
  AboutRole,
  AboutText,
  AboutTitle,
  AboutType,
  CompanyLocation,
  ExperienceBottom,
  ExperienceTop,
} from "./About.styled";

function About() {
  const experiences = [
    {
      role: "Analista de Suporte Técnico N1 | Service Desk (Remoto)",
      company: "iK",
      location: "Extrema, MG",
      type: "Estagio",
      startDate: "Ago 2025",
      endDate: "Ago 2026",
    },
    {
      role: "Assistente de Engenharia de Teste",
      company: "Grupo Multilaser",
      location: "Extrema, MG",
      type: "CLT",
      startDate: "Fev 2022",
      endDate: "Mar 2025",
    },
    {
      role: "Aprendiz de Analista de Suporte Computacional",
      company: "Bauducco",
      location: "Extrema, MG",
      type: "Estagio",
      startDate: "Fev 2021",
      endDate: "Fev 2022",
    },
  ];

  const academic = [
    {
      role: "Desenvolvedor em FULL STACK",
      company: "FAEX - Faculdade de Extrema",
      type: "Pós-Graduação",
      startDate: "Ago 2025",
      endDate: "Ago 2026",
    },
    {
      role: "Análise e Desenvolvimento de Sistemas ",
      company: "Universidade São Francisco",
      type: "Graduação",
      startDate: "Fev 2024",
      endDate: "Fev 2026",
    },
    {
      role: "Técnico de Manutenção e Suporte em Informática",
      company: "SENAI - Serviço Nacional de Aprendizagem Industrial",
      type: "Tecnólogo",
      startDate: "Out 2021",
      endDate: "Abr 2023",
    },
  ];

  return (
    <>
      <AboutContainer>
        <AboutTitle>Sobre Mim</AboutTitle>
        <AboutText>
          Olá! Sou João Victor, tenho 22 anos e sou natural de Caxambu (MG).
          Atualmente curso Análise e Desenvolvimento de Sistemas e estou me
          especializando com uma Pós-Graduação em Desenvolvimento Full Stack.
        </AboutText>

        <AboutTitle>Experiencia Profissional</AboutTitle>
        {experiences.map((exp, index) => (
          <AboutExperiencesContent key={index}>
            <ExperienceTop>
              <AboutRole>{exp.role}</AboutRole>
              <AboutType $status={exp.type.toLowerCase()}>{exp.type}</AboutType>
            </ExperienceTop>

            <ExperienceBottom>
              <CompanyLocation>
                <Building />
                {exp.company}

                <MapPin />
                {exp.location}
              </CompanyLocation>

              <AboutDates>
                <Calendar />
                {exp.startDate} - {exp.endDate}
              </AboutDates>
            </ExperienceBottom>
          </AboutExperiencesContent>
        ))}
      </AboutContainer>

      <AboutContainerAcademic>
        <AboutTitle>Formação Acadêmica</AboutTitle>

        {academic.map((exp, index) => (
          <AboutAcademicContent key={index}>
            <ExperienceTop>
              <AboutRole>{exp.role}</AboutRole>
              <AboutType
                $status={exp.type
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")}>
                {exp.type}
              </AboutType>
            </ExperienceTop>

            <ExperienceBottom>
              <CompanyLocation>
                <Building />
                {exp.company}
              </CompanyLocation>

              <AboutDates>
                <Calendar />
                {exp.startDate} - {exp.endDate}
              </AboutDates>
            </ExperienceBottom>
          </AboutAcademicContent>
        ))}
      </AboutContainerAcademic>
    </>
  );
}

export default About;
