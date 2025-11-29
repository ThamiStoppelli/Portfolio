import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.article`
  border-radius: ${({ theme }) => theme.layout.borderRadiusMd};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  padding: 14px 14px 12px;
  background: rgba(255, 255, 255, 0.9);
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 4px;
`;

export const Degree = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;

export const Institution = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Meta = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Details = styled.ul`
  margin: 6px 0 0;
  padding-left: 18px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;