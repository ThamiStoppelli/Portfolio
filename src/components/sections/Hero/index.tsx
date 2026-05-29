import React from "react";
import heroPhoto from "../../../assets/professional-pic1.jpg";
import * as S from "./styles";

export const Hero: React.FC = () => {
  return (
    <S.HeroWrapper>
      <div>
        <S.HeroTitle>Hi, I’m Thamires.</S.HeroTitle>
        <S.HeroSubtitle>
          Design Engineer — I design the interface and write the code.
        </S.HeroSubtitle>
        <S.HeroText>
          4+ years shipping production React/TypeScript apps. 5+ years in Figma. Italian citizen, 
          EU work-eligible, fluent English. Currently shipping at Spread Tecnologia (remote). 
          Open to roles where the same person owns the design file and the pull request.
        </S.HeroText>
        <S.HeroTags>
          <S.Tag>React & Angular</S.Tag>
          <S.Tag>UI/UX Design</S.Tag>
          <S.Tag>Node.js & C#/.NET</S.Tag>
          <S.Tag>Remote · Worldwide</S.Tag>
        </S.HeroTags>
        <S.HeroButtons>
          <S.PrimaryButton
            href="mailto:thamiresstoppelli@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Let’s work together
          </S.PrimaryButton>
          <S.GhostButton
            href="https://github.com/ThamiStoppelli"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </S.GhostButton>
        </S.HeroButtons>
      </div>

      <S.HeroPhotoWrapper>
        <S.HeroPhotoCard>
          <S.HeroPhoto src={heroPhoto} alt="Thamires Stoppelli" />
        </S.HeroPhotoCard>
      </S.HeroPhotoWrapper>
    </S.HeroWrapper>
  );
};
