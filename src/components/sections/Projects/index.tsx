import React from "react";
import { Section } from "../../common/Section";
import { projects } from "../../../data/projects";
import { ProjectCard } from "../../common/ProjectCard";
import * as S from "./styles";

export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of work that combines frontend, fullstack and UI/UX."
    >
      <S.ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </S.ProjectsGrid>
    </Section>
  );
};
