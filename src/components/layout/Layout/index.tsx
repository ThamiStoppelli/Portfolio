import React from "react";
import * as S from "./styles";
import { Navbar } from "../Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.PageWrapper>
      <Navbar />
      <S.Content>{children}</S.Content>
    </S.PageWrapper>
  );
};
