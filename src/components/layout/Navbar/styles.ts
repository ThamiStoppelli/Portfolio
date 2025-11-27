import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(18px);
  position: sticky;
  top: 16px;
  z-index: 20;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
`;

export const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 14px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavLink = styled.button`
  background: transparent;
  border: none;
  padding: 6px 10px;
  border-radius: 999px;
  font: inherit;
  cursor: pointer;
  color: inherit;
  transition: background 0.18s ease, color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.tagBg};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const NavCta = styled.a`
  all: unset;
  padding: 8px 16px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.accentStrong};
    box-shadow: ${({ theme }) => theme.layout.shadowSoft};
  }
`;
