import { colors, fonts, spacing, radii } from "../styles/tokens.js";

export const slideText = {
  eyebrow: {
    color: colors.accent,
    fontSize: fonts.sizeSmall,
    fontWeight: fonts.weightBold,
    letterSpacing: "0.16em",
    margin: `0 0 ${spacing.sm} 0`,
    textTransform: "uppercase",
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: fonts.sizeHero,
    fontWeight: fonts.weightBold,
    lineHeight: 0.94,
    margin: `0 0 ${spacing.md} 0`,
    maxWidth: "920px",
  },
  heading: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(2.4rem, 5vw, 4.6rem)",
    fontWeight: fonts.weightBold,
    lineHeight: 1,
    margin: `0 0 ${spacing.lg} 0`,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
    lineHeight: fonts.lineHeight,
    margin: 0,
    maxWidth: "720px",
  },
};

export const slideUi = {
  card: {
    background: colors.bgPanel,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.lg,
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.24)",
    backdropFilter: "blur(14px)",
  },
  marker: {
    alignItems: "center",
    background: colors.accentSoft,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.md,
    color: colors.accent,
    display: "inline-flex",
    fontSize: fonts.sizeSmall,
    fontWeight: fonts.weightBold,
    height: "2rem",
    justifyContent: "center",
    minWidth: "2rem",
  },
};
