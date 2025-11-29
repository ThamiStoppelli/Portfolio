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
  margin: 0 0 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ParagraphSmall = styled.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.tagBg};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/* Accordion */

export const ToggleWrapper = styled.div`
  margin-top: 4px;
`;

export const ToggleButton = styled.button`
  margin-top: 4px;
  padding: 6px 0;
  border: none;
  background: none;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accentStrong};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding-right: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ToggleIcon = styled.span<{ $expanded: boolean }>`
  display: inline-block;
  font-size: 10px;
  transform: ${({ $expanded }) => ($expanded ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.16s ease;
`;

export const AccordionContent = styled.div`
  margin-top: 6px;
  padding: 10px 13px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
`;
