import styled from "styled-components";

export const ContactGrid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr;
  }
`;

export const Text = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
`;

export const ContactItem = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    text-decoration: underline;
  }
`;
