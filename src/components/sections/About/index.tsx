import React from "react";
import { Section } from "../../common/Section";
import * as S from "./styles";

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About"
      subtitle="I design the interface and write the code."
    >
      <S.AboutGrid>
        <div>
          <S.Paragraph>
            I'm a Design Engineer — I live in the space between design and code, where most products either break or come alive.
          </S.Paragraph>
          <S.Paragraph>
            For 4+ years I've shipped production React and TypeScript; for 5+ years I've designed in Figma. That combination means I don't hand off mockups and hope — I design the interface and write the code that makes it real, pixel for pixel.
          </S.Paragraph>
          <S.Paragraph>
            I've built end-to-end for Gol Airlines, shaped the Brazilian market expansion of FastCare (a US wound-care platform running in 5,000+ care facilities), and I'm currently leading UI and frontend for Poupex, a Brazilian federal bank.
          </S.Paragraph>
          <S.Paragraph>
            I work across React, TypeScript, Next.js, React Native and design systems — comfortable in distributed teams across multiple time zones. I hold Italian and Brazilian citizenship, speak English, Portuguese, Spanish and German, and I work remotely with teams in the EU and worldwide.
          </S.Paragraph>
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
