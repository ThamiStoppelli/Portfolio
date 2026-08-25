import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 52px 24px 80px;
`;

export const TopRow = styled.div`
  margin-bottom: 72px;
`;

export const BackLink = styled(Link)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.accentStrong};

  &:hover {
    text-decoration: underline;
  }
`;

export const Hero = styled.header`
  padding-bottom: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSoft};

  h1 {
    margin: 8px 0 16px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(42px, 7vw, 68px);
    letter-spacing: -0.055em;
    line-height: 1;
  }
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accentStrong};
  font-weight: 600;
  font-size: 14px;
`;

export const Intro = styled.p`
  max-width: 650px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 20px;
  line-height: 1.6;
`;

export const Updated = styled.p`
  margin: 24px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 56px 0;

  section {
    max-width: 760px;
  }

  h2 {
    margin: 0 0 14px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 24px;
    letter-spacing: -0.03em;
  }

  p {
    margin: 0 0 14px;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.75;
    font-size: 15px;
  }
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.colors.accentStrong};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderSoft};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const ProjectLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accentStrong};

  &:hover {
    text-decoration: underline;
  }
`;