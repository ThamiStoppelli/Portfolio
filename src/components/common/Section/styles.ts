// src/components/common/Section/styles.ts
import styled from "styled-components";

export const SectionWrapper = styled.section<{ $withSurface?: boolean }>`
  scroll-margin-top: 100px;
  border-radius: ${({ theme }) => theme.layout.borderRadiusLg};
  padding: ${({ $withSurface }) => ($withSurface ? "28px 26px" : "0")};
  background: ${({ $withSurface, theme }) =>
    $withSurface ? theme.colors.surface : "transparent"};
  box-shadow: ${({ $withSurface, theme }) =>
    $withSurface ? theme.layout.shadowSoft : "none"};

  @media (min-width: 768px) {
    padding: ${({ $withSurface }) => ($withSurface ? "32px 32px" : "0")};
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SectionSubtitle = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
