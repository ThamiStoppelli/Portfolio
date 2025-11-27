import React, { useState } from "react";
import { Section } from "../../common/Section";
import * as S from "./styles";

export const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Section
      id="about"
      title="About"
      subtitle="Frontend & UI/UX developer with fullstack experience."
    >
      <S.AboutGrid>
        <div>
          <S.Paragraph>
            I design and build intuitive, responsive and user-centered web applications, combining strong frontend engineering (React, Angular, TypeScript) with a solid UI/UX background.
          </S.Paragraph>
          <S.Paragraph>
            I deliver clean interfaces and scalable product experiences bringing backend experience with Node.js, C#/.NET and SQL/MongoDB.
          </S.Paragraph>
          <S.Paragraph>
            Fluent in English, Portuguese and Spanish, experienced in remote work across
            multicultural teams.
          </S.Paragraph>

          {/* Accordion */}
          <S.ToggleWrapper>
            <S.ToggleButton
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "Show less" : "Read more about my background"}
              <S.ToggleIcon $expanded={isExpanded}>▾</S.ToggleIcon>
            </S.ToggleButton>
          </S.ToggleWrapper>

          {isExpanded && (
            <S.AccordionContent>
              <S.ParagraphSmall>
                I’m a Frontend & UI/UX Developer with fullstack experience, specializing
                in building intuitive, responsive and user-centered web applications. I
                combine strong frontend engineering (React, Angular, TypeScript,
                JavaScript) with a solid background in UI/UX design, delivering clean
                interfaces, scalable architecture and consistent product experiences.
              </S.ParagraphSmall>
              <S.ParagraphSmall>
                My backend experience with Node.js, C#/.NET and SQL/MongoDB,
                enables smooth integrations and efficient problem-solving across the
                entire product lifecycle. I’ve worked in ERP systems, innovation labs and
                enterprise environments.
              </S.ParagraphSmall>
              <S.ParagraphSmall>
                I am passionate about clean design, product thinking and creating digital
                experiences that feel effortless to users.
              </S.ParagraphSmall>
            </S.AccordionContent>
          )}
        </div>

        <div>
          <S.TagGroup>
            <S.Tag>Remote · Worldwide</S.Tag>
            <S.Tag>Dual Citizenship: Brazil & Italy</S.Tag>
            <S.Tag>EU Work Eligible</S.Tag>
            <S.Tag>2nd Place – Global Legal Hackathon</S.Tag>
          </S.TagGroup>
        </div>
      </S.AboutGrid>
    </Section>
  );
};
