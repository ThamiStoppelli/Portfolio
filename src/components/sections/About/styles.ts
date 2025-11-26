import styled from "styled-components";

export const AboutGrid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1.2fr;
    gap: 24px;
  }
`;

export const Paragraph = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const BadgeGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.chipBg};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
