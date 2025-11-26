import React from "react";
import type { Project } from "../../../data/projects";
import * as S from "./styles";

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <S.Card>
      <div>
        <S.Name>{project.name}</S.Name>
        <S.Role>{project.role}</S.Role>
      </div>
      <S.Description>{project.description}</S.Description>

      <S.TechList>
        {project.techStack.map((tech) => (
          <S.TechTag key={tech}>{tech}</S.TechTag>
        ))}
      </S.TechList>

      <S.Highlights>
        {project.highlights.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </S.Highlights>

      <S.LinksRow>
        {project.githubUrl && (
          <S.Link href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </S.Link>
        )}
        {project.figmaUrl && (
          <S.Link href={project.figmaUrl} target="_blank" rel="noreferrer">
            Figma
          </S.Link>
        )}
        {project.additionalInfo && (
          <S.Link href={project.additionalInfo} target="_blank" rel="noreferrer">
            Additional Info
          </S.Link>
        )}
        {project.liveUrl && project.liveUrl !== "#" && (
          <S.Link href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </S.Link>
        )}
      </S.LinksRow>
    </S.Card>
  );
};
