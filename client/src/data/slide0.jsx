import { colors, fonts, spacing } from "../styles/tokens.js";

// What the PRESENTER sees
export const PresenterSlide = () => (
  <div style={{ ...styles.page, background: colors.bgDark }}>
    <h1 style={styles.title}>Welcome!</h1>
    <p style={styles.subtitle}>Today's session is starting soon.</p>
    <p style={styles.hint}>📋 Presenter notes: Greet the audience, introduce yourself.</p>
  </div>
);

// What the AUDIENCE sees (same content, no presenter notes)
export const AudienceSlide = () => (
  <div style={{ ...styles.page, background: colors.bgDark }}>
    <h1 style={styles.title}>Welcome!</h1>
    <p style={styles.subtitle}>Today's session is starting soon.</p>
  </div>
);

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
    padding: spacing.xl,
  },
  title: {
    fontSize: fonts.sizeHero,
    fontWeight: fonts.weightBold,
    color: colors.textPrimary,
    margin: `0 0 ${spacing.md} 0`,
  },
  subtitle: {
    fontSize: fonts.sizeLg,
    color: colors.textSecondary,
    margin: `0 0 ${spacing.sm} 0`,
  },
  hint: {
    fontSize: fonts.sizeSmall,
    color: colors.textMuted,
    marginTop: spacing.lg,
    fontStyle: "italic",
  },
};