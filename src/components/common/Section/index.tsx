import React from "react";
import * as S from "./styles";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  withSurface?: boolean;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  withSurface = true,
  children,
}) => {
  return (
    <S.SectionWrapper id={id} $withSurface={withSurface}>
      {title && <S.SectionTitle>{title}</S.SectionTitle>}
      {subtitle && <S.SectionSubtitle>{subtitle}</S.SectionSubtitle>}
      {children}
    </S.SectionWrapper>
  );
};
