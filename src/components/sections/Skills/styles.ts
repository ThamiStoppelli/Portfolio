import styled from "styled-components";

export const SkillsGrid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const SkillBlock = styled.div`
  border-radius: ${({ theme }) => theme.layout.borderRadiusMd};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  padding: 14px 14px 12px;
  background: rgba(255, 255, 255, 0.9);
`;

export const SkillTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SkillList = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;
