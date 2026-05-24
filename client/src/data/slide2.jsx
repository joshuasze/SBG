import { colors, fonts, spacing } from "../styles/tokens.js";

export const PresenterSlide = () => (
  <div style={{ ...styles.page, background: colors.bgDark }}>
    <h1 style={styles.title}>Quick Poll</h1>
    <p style={styles.subtitle}>Let's hear from the audience.</p>
    <p style={styles.hint}>
      📋 Presenter notes: Click "Open Poll" in the control bar below to push
      the poll to audience devices.
    </p>
  </div>
);

export const AudienceSlide = () => (
  <div style={{ ...styles.page, background: colors.bgDark }}>
    <h1 style={styles.title}>Quick Poll</h1>
    <p style={styles.subtitle}>⏳ Wait for the presenter to open the poll...</p>
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
  },
  hint: {
    fontSize: fonts.sizeSmall,
    color: colors.textMuted,
    marginTop: spacing.lg,
    fontStyle: "italic",
    maxWidth: "500px",
  },
};