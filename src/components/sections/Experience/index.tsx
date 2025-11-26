import React from "react";
import { Section } from "../../common/Section";
import { experiences } from "../../../data/experience";
import * as S from "./styles";

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional experience across ERP, innovation labs and enterprise projects."
    >
      <S.List>
        {experiences.map((exp) => (
          <S.Item key={exp.company + exp.role}>
            <S.HeaderRow>
              <div>
                <S.Role>{exp.role}</S.Role>
                <S.Company>{exp.company}</S.Company>
              </div>
              <div>
                <S.Meta>{exp.period}</S.Meta>
                <br />
                <S.Meta>{exp.location}</S.Meta>
              </div>
            </S.HeaderRow>

            <S.Bullets>
              {exp.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </S.Bullets>
          </S.Item>
        ))}
      </S.List>
    </Section>
  );
};
