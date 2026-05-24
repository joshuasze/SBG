import { colors, fonts, spacing } from "../styles/tokens.js";

export const PresenterSlide = () => (
  <div style={{ ...styles.page, background: colors.bgDark }}>
    <h1 style={styles.title}>Key Takeaways</h1>
    <p style={styles.subtitle}>Real-time communication makes presentations more engaging.</p>
    <p style={styles.hint}>Presenter notes: Recap the main points before closing.</p>
  </div>
);

export const AudienceSlide = () => (
  <div style={{ ...styles.page, background: colors.bgDark }}>
    <h1 style={styles.title}>Key Takeaways</h1>
    <p style={styles.subtitle}>Real-time communication makes presentations more engaging.</p>
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
    margin: 0,
    maxWidth: "640px",
  },
  hint: {
    fontSize: fonts.sizeSmall,
    color: colors.textMuted,
    marginTop: spacing.lg,
    fontStyle: "italic",
  },
};
