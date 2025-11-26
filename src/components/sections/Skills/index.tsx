import React from "react";
import { Section } from "../../common/Section";
import * as S from "./styles";

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I use to design and build digital products."
    >
      <S.SkillsGrid>
        <S.SkillBlock>
          <S.SkillTitle>Frontend</S.SkillTitle>
          <S.SkillList>
            React.js, Angular, TypeScript, JavaScript, React Native, Next.js, HTML5,
            CSS3, Styled Components, Responsive UI, SPA
          </S.SkillList>
        </S.SkillBlock>

        <S.SkillBlock>
          <S.SkillTitle>Backend</S.SkillTitle>
          <S.SkillList>
            Node.js, Express, C#, .NET Core, REST APIs, SQL, PostgreSQL, MySQL, MongoDB
          </S.SkillList>
        </S.SkillBlock>

        <S.SkillBlock>
          <S.SkillTitle>UI/UX Design</S.SkillTitle>
          <S.SkillList>
            Figma, Wireframing, Prototyping, UX Research, Usability Testing
          </S.SkillList>
        </S.SkillBlock>

        <S.SkillBlock>
          <S.SkillTitle>Tools & DevOps</S.SkillTitle>
          <S.SkillList>
            Git, GitHub, Docker, CI/CD, Azure, AWS, Vercel, Jira, Azure DevOps
          </S.SkillList>
        </S.SkillBlock>
      </S.SkillsGrid>
    </Section>
  );
};
