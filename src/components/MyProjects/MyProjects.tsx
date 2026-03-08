import { Paperclip, Github } from "lucide-react";
import { Subtitle, Title } from "../../styled/typography";
import {
  MyProjectsAction,
  MyProjectsCard,
  MyProjectsContainer,
  MyProjectsContent,
  MyProjectsDescription,
  MyProjectsLink,
  MyProjectsImg,
  MyProjectsTechnology,
  MyProjectsTitle,
} from "./MyProjects.styled";

function MyProjects() {
  const projects = [
    {
      imagem: "/portifolio_giovana.png",
      title: "Portfólio Giovana Carvalho",
      description:
        "Projeto pessoal: desenvolvi um portfólio para minha esposa, que é analista de dados, utilizando React e TypeScript.",
      technology:
        "React , TypeScript, Styled Components, Lucide React (ícones)",
      live_preview: "https://giovanacarvalhoio.vercel.app/",
      live_code: "https://github.com/olegarioojv/PortfolioGiovanaCarvalho",
    },
    {
      imagem: "/school_page.png",
      title: "SchoolPage",
      description:
        "Projeto pessoal desenvolvido para estudar CSS com um template pronto do Figma.",
      technology:
        "React , Styled-Components, CSS Grid, Flexbox, JavaScript (ES6+)",
      live_preview: "https://school-page-dusky.vercel.app/",
      live_code: "https://github.com/olegarioojv/SchoolPage",
    },
    {
      imagem: "/lucy.png",
      title: "LucyPage",
      description:
        "Projeto desenvolvido em React e Tailwind, com hospedagem para prática e estudo.",
      technology: "React , Tailwind CSS, Framer Motion, Lucide React",
      live_preview: "https://lucy-page-alpha.vercel.app/",
      live_code: "https://github.com/olegarioojv/LucyPage",
    },
    {
      imagem: "/base_projects.png",
      title: "Project Tile goes here",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      technology: "HTML , JavaScript, SASS, React",
      live_preview: "https://www.google.com/",
      live_code: "https://www.google.com/",
    },
    {
      imagem: "/base_projects.png",
      title: "Project Tile goes here",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      technology: "HTML , JavaScript, SASS, React",
      live_preview: "https://www.google.com/",
      live_code: "https://www.google.com/",
    },
    {
      imagem: "/base_projects.png",
      title: "Project Tile goes here",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      technology: "HTML , JavaScript, SASS, React",
      live_preview: "https://www.google.com/",
      live_code: "https://www.google.com/",
    },
  ];

  return (
    <>
      <Title>Projetos</Title>
      <Subtitle>Coisas que construí até agora</Subtitle>

      <MyProjectsContainer>
        {projects.map((project, index) => (
          <MyProjectsCard key={index}>
            <MyProjectsImg src={project.imagem} alt={project.title} />

            <MyProjectsContent>
              <MyProjectsTitle>{project.title}</MyProjectsTitle>

              <MyProjectsDescription>
                {project.description}
              </MyProjectsDescription>

              <MyProjectsTechnology>
                <span>Tecnologias:</span> {project.technology}
              </MyProjectsTechnology>

              <MyProjectsAction>
                <MyProjectsLink
                  href={project.live_preview}
                  target="_blank"
                  rel="noreferrer">
                  <Paperclip /> Projeto Online
                </MyProjectsLink>

                <MyProjectsLink
                  href={project.live_code}
                  target="_blank"
                  rel="noreferrer">
                  <Github /> GitHub
                </MyProjectsLink>
              </MyProjectsAction>
            </MyProjectsContent>
          </MyProjectsCard>
        ))}
      </MyProjectsContainer>
    </>
  );
}

export default MyProjects;
