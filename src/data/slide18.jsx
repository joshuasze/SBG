import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const actions = [
  "Food gardens",
  "Paid cooking workshops",
  "General wellness programmes",
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Recommendation 2</p>
    <h1 style={styles.heading}>Paid Wellness Programmes</h1>
    <p style={styles.kicker}>Based on comparison</p>
    <p style={styles.body}>
      SBG can strengthen both impact and revenue through curated paid wellness offerings.
    </p>
    <article style={styles.card}>
      <div style={styles.boxGrid}>
        {actions.map((item) => (
          <div key={item} style={styles.itemBox}>{item}</div>
        ))}
      </div>
    </article>
    <article style={styles.resultCard}>
      <p style={styles.resultLabel}>Result</p>
      <p style={styles.resultText}>
        More conservation funding and stronger Smart Living + Smart People outcomes.
      </p>
    </article>
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Recommendation 2</p>
    <h1 style={styles.heading}>Paid Wellness Programmes</h1>
    <p style={styles.kicker}>Based on comparison</p>
    <p style={styles.body}>
      SBG can strengthen both impact and revenue through curated paid wellness offerings.
    </p>
    <article style={styles.card}>
      <div style={styles.boxGrid}>
        {actions.map((item) => (
          <div key={item} style={styles.itemBox}>{item}</div>
        ))}
      </div>
    </article>
    <article style={styles.resultCard}>
      <p style={styles.resultLabel}>Result</p>
      <p style={styles.resultText}>
        More conservation funding and stronger Smart Living + Smart People outcomes.
      </p>
    </article>
  </SlideShell>
);

const styles = {
  heading: {
    ...slideText.heading,
    fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
    marginBottom: "clamp(0.35rem, 0.8vw, 0.55rem)",
  },
  kicker: {
    margin: `0 0 ${spacing.xs} 0`,
    color: colors.accent,
    fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
    fontWeight: fonts.weightBold,
    textTransform: "uppercase",
  },
  body: {
    margin: `0 0 ${spacing.sm} 0`,
    color: colors.textSecondary,
    fontSize: "clamp(1rem, 1.45vw, 1.14rem)",
    lineHeight: 1.34,
    maxWidth: "960px",
  },
  card: {
    ...slideUi.card,
    boxSizing: "border-box",
    maxWidth: "980px",
    width: "100%",
    padding: "clamp(0.8rem, 1.6vw, 1.15rem)",
  },
  boxGrid: {
    margin: 0,
    display: "grid",
    gap: "clamp(0.45rem, 1vw, 0.7rem)",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
  },
  itemBox: {
    background: colors.bgSubtle,
    border: `1px solid ${colors.borderSubtle}`,
    borderRadius: "6px",
    padding: "clamp(0.55rem, 1.2vw, 0.85rem)",
    color: colors.textSecondary,
    fontSize: "clamp(1rem, 1.35vw, 1.12rem)",
    lineHeight: 1.28,
  },
  resultCard: {
    ...slideUi.card,
    boxSizing: "border-box",
    margin: `${spacing.sm} 0 0 0`,
    maxWidth: "980px",
    width: "100%",
    padding: "clamp(0.7rem, 1.4vw, 1rem)",
    border: `1px solid ${colors.accent}`,
    background: "rgba(215, 168, 79, 0.14)",
  },
  resultLabel: {
    margin: `0 0 ${spacing.xs} 0`,
    color: colors.accent,
    fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
    fontWeight: fonts.weightBold,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  resultText: {
    margin: 0,
    color: colors.textPrimary,
    fontSize: "clamp(1rem, 1.35vw, 1.12rem)",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.3,
  },
};
