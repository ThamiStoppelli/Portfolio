import React from "react";
import { Section } from "../../common/Section";
import { education } from "../../../data/education";
import * as S from "./styles";

export const Education: React.FC = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background in technology, law and international studies."
    >
      <S.List>
        {education.map((item) => (
          <S.Item key={item.institution + item.degree}>
            <S.HeaderRow>
              <div>
                <S.Degree>{item.degree}</S.Degree>
                <S.Institution>{item.institution}</S.Institution>
              </div>
              <div>
                <S.Meta>{item.period}</S.Meta>
                <br />
                <S.Meta>{item.location}</S.Meta>
              </div>
            </S.HeaderRow>

            <S.Details>
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </S.Details>
          </S.Item>
        ))}
      </S.List>
    </Section>
  );
};
