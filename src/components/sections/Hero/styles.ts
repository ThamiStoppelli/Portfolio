import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: grid;
  gap: 24px;
  align-items: center;
  border-radius: ${({ theme }) => theme.layout.borderRadiusLg};
  padding: 26px 24px;
  background: linear-gradient(135deg, #fdf8f2 0%, #f7f0e7 45%, #f3e3d5 100%);
  box-shadow: ${({ theme }) => theme.layout.shadowSoft};

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 3fr) minmax(0, 2.2fr);
    padding: 32px 32px;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0 0 8px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.h2`
  margin: 0 0 14px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HeroText = styled.p`
  margin: 0 0 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 480px;
`;

export const HeroChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`;

export const Chip = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.chipBg};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PrimaryButton = styled.a`
  padding: 9px 16px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.accentStrong};
    box-shadow: ${({ theme }) => theme.layout.shadowSoft};
  }
`;

export const GhostButton = styled.a`
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #fff;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const HeroPhotoWrapper = styled.div`
  justify-self: center;

  @media (min-width: 768px) {
    justify-self: end;
  }
`;

export const HeroPhotoCard = styled.div`
  width: 210px;
  height: 260px;
  border-radius: 28px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: ${({ theme }) => theme.layout.shadowSoft};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  object-fit: cover;
`;
