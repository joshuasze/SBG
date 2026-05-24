import { colors, fonts, radii, spacing } from "./tokens.js";

export const text = {
  hero: {
    fontSize: fonts.sizeHero,
    fontWeight: fonts.weightBold,
    color: colors.textPrimary,
    margin: `0 0 ${spacing.md} 0`,
    lineHeight: 1.2,
  },
  heading: {
    fontSize: fonts.sizeXl,
    fontWeight: fonts.weightBold,
    color: colors.textPrimary,
    margin: `0 0 ${spacing.sm} 0`,
  },
  body: {
    fontSize: fonts.sizeLg,
    color: colors.textSecondary,
    lineHeight: fonts.lineHeight,
    maxWidth: "700px",
    margin: 0,
  },
  muted: {
    fontSize: fonts.sizeBase,
    color: colors.textMuted,
  },
};

export const buttons = {
  primary: {
    padding: "0.6rem 1.5rem",
    background: colors.accent,
    color: colors.textPrimary,
    border: "none",
    borderRadius: radii.md,
    fontSize: fonts.sizeBase,
    cursor: "pointer",
    fontWeight: fonts.weightBold,
  },
  danger: {
    padding: "0.6rem 1.5rem",
    background: colors.danger,
    color: colors.textPrimary,
    border: "none",
    borderRadius: radii.md,
    fontSize: fonts.sizeBase,
    cursor: "pointer",
  },
  ghost: {
    padding: "0.6rem 1.5rem",
    background: "transparent",
    color: colors.textSecondary,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    fontSize: fonts.sizeBase,
    cursor: "pointer",
  },
};

export const containers = {
  card: {
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.lg,
    padding: spacing.md,
  },
  centered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
};