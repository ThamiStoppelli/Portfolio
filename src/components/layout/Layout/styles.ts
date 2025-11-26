import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 40px;

  @media (min-width: 768px) {
    padding: 32px 24px 60px;
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 56px;
  }
`;
