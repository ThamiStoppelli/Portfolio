import styled from "styled-components";

export const Card = styled.article`
  border-radius: ${({ theme }) => theme.layout.borderRadiusMd};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: ${({ theme }) => theme.colors.surface};
  padding: 16px 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.layout.shadowSoft};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
`;

export const Role = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Description = styled.p`
  margin: 6px 0 4px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 4px;
`;

export const TechTag = styled.span`
  padding: 4px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.chipBg};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Highlights = styled.ul`
  margin: 4px 0 4px;
  padding-left: 18px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const LinksRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
`;

export const Link = styled.a`
  font-size: 11.5px;
  color: ${({ theme }) => theme.colors.accentStrong};

  &:hover {
    text-decoration: underline;
  }
`;
