import React from "react";
import * as S from "./styles";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Navbar: React.FC = () => {
  return (
    <S.NavBar>
      <S.Brand>
        <S.Dot />
        <S.BrandName>Thamires Stoppelli</S.BrandName>
      </S.Brand>

      <S.NavLinks>
        <S.NavLink onClick={() => scrollToSection("about")}>About</S.NavLink>
        <S.NavLink onClick={() => scrollToSection("skills")}>Skills</S.NavLink>
        <S.NavLink onClick={() => scrollToSection("projects")}>Projects</S.NavLink>
        <S.NavLink onClick={() => scrollToSection("experience")}>
          Experience
        </S.NavLink>
      </S.NavLinks>

      <S.NavCta href="#contact">Let’s talk</S.NavCta>
    </S.NavBar>
  );
};
