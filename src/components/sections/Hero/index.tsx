import React from "react";
import heroPhoto from "../../../assets/professional-pic1.jpg";
import * as S from "./styles";

export const Hero: React.FC = () => {
  return (
    <S.HeroWrapper>
      <div>
        <S.HeroTitle>Hi, I’m Thamires.</S.HeroTitle>
        <S.HeroSubtitle>
          Frontend & UI/UX Developer with fullstack experience.
        </S.HeroSubtitle>
        <S.HeroText>
          I design and build modern, user-centered web applications using React, Angular
          and a strong UI/UX mindset. I care about clean interfaces, good architecture
          and digital experiences that feel effortless.
        </S.HeroText>
        <S.HeroChips>
          <S.Chip>React & Angular</S.Chip>
          <S.Chip>UI/UX Design</S.Chip>
          <S.Chip>Node.js & C#/.NET</S.Chip>
          <S.Chip>Remote · Worldwide</S.Chip>
        </S.HeroChips>
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
