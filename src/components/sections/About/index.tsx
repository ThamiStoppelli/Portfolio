import React from "react";
import { Section } from "../../common/Section";
import * as S from "./styles";

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About"
      subtitle="A frontend & UI/UX developer with a legal background and international experience."
    >
      <S.AboutGrid>
        <div>
          <S.Paragraph>
            I’m a Frontend & UI/UX Developer with fullstack experience, specializing in
            building intuitive, responsive and user-centered web applications. I combine
            strong frontend engineering (React, Angular, TypeScript, JavaScript) with a
            solid background in UI/UX design, delivering clean interfaces, scalable
            architecture and consistent product experiences.
          </S.Paragraph>
          <S.Paragraph>
            I also bring backend experience with Node.js, C#/.NET and SQL/MongoDB,
            enabling smooth integrations and efficient problem-solving across the entire
            product lifecycle. I’ve worked in ERP systems, innovation labs and enterprise
            environments.
          </S.Paragraph>
          <S.Paragraph>
            Fluent in English, Portuguese and Spanish, with experience working remotely
            across different countries and multicultural teams. Passionate about clean
            design, product thinking and creating digital experiences that feel effortless
            to users.
          </S.Paragraph>
        </div>

        <div>
          <S.BadgeGroup>
            <S.Badge>Remote · Worldwide</S.Badge>
            <S.Badge>Dual Citizenship: Brazil & Italy</S.Badge>
            <S.Badge>EU Work Eligible</S.Badge>
            <S.Badge>2nd Place – Global Legal Hackathon</S.Badge>
          </S.BadgeGroup>
        </div>
      </S.AboutGrid>
    </Section>
  );
};
