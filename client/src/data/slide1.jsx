import { colors, fonts, spacing } from "../styles/tokens.js";

export const PresenterSlide = () => (
  <div style={{ ...styles.page, background: colors.bgDark }}>
    <h1 style={styles.title}>About This Session</h1>
    <ul style={styles.list}>
      <li style={styles.item}>📌 Topic 1 — Introduction</li>
      <li style={styles.item}>📌 Topic 2 — Main Content</li>
      <li style={styles.item}>📌 Topic 3 — Q&A + Poll</li>
    </ul>
    <p style={styles.hint}>📋 Presenter notes: Walk through the agenda briefly.</p>
  </div>
);

export const AudienceSlide = () => (
  <div style={{ ...styles.page, background: colors.bgDark }}>
    <h1 style={styles.title}>About This Session</h1>
    <ul style={styles.list}>
      <li style={styles.item}>📌 Topic 1 — Introduction</li>
      <li style={styles.item}>📌 Topic 2 — Main Content</li>
      <li style={styles.item}>📌 Topic 3 — Q&A + Poll</li>
    </ul>
  </div>
);

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    padding: spacing.xl,
  },
  title: {
    fontSize: fonts.sizeHero,
    fontWeight: fonts.weightBold,
    color: colors.textPrimary,
    margin: `0 0 ${spacing.lg} 0`,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
  },
  item: {
    fontSize: fonts.sizeLg,
    color: colors.textSecondary,
    lineHeight: fonts.lineHeight,
  },
  hint: {
    fontSize: fonts.sizeSmall,
    color: colors.textMuted,
    marginTop: spacing.lg,
    fontStyle: "italic",
  },
};