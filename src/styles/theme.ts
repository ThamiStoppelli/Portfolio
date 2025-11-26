// src/styles/theme.ts
export const theme = {
  colors: {
    background: "#F7F4EF",
    surface: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#555555",
    muted: "#888888",
    accent: "#D9A48F",
    accentStrong: "#C78666",
    borderSoft: "#E5E1DC",
    chipBg: "#F2E6DD",
  },
  fonts: {
    heading:
      "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body:
      "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  layout: {
    maxWidth: "1080px",
    borderRadiusLg: "18px",
    borderRadiusMd: "14px",
    borderRadiusSm: "999px",
    shadowSoft: "0 18px 40px rgba(15, 23, 42, 0.10)",
  },
};

export type ThemeType = typeof theme;
