import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const issues = [
  "Poor signage",
  "No audio guides",
  "No guided path to learn about plants",
  "No clear real-time weather visibility",
];

const solution = [
  "Real-time map and navigation",
  "Audio guides",
  "AR learning points",
  "Weather cameras for live updates",
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Recommendation 3</p>
    <h1 style={styles.heading}>Problems We Noticed</h1>
    <p style={styles.kicker}>Based on observation</p>

    <div style={styles.grid}>
      <article style={styles.card}>
        <h2 style={styles.subTitle}>Observed Gaps</h2>
        <div style={styles.boxList}>
          {issues.map((item) => (
            <div key={item} style={styles.itemBox}>{item}</div>
          ))}
        </div>
      </article>

      <article style={styles.card}>
        <h2 style={styles.subTitle}>Integrated App Solution</h2>
        <div style={styles.boxList}>
          {solution.map((item) => (
            <div key={item} style={styles.itemBox}>{item}</div>
          ))}
        </div>
      </article>
    </div>

    <article style={styles.resultCard}>
      <p style={styles.resultLabel}>Result</p>
      <p style={styles.resultText}>
        A smoother, smarter visitor journey with better learning and engagement.
      </p>
    </article>
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Recommendation 3</p>
    <h1 style={styles.heading}>Problems We Noticed</h1>
    <p style={styles.kicker}>Based on observation</p>

    <div style={styles.grid}>
      <article style={styles.card}>
        <h2 style={styles.subTitle}>Observed Gaps</h2>
        <div style={styles.boxList}>
          {issues.map((item) => (
            <div key={item} style={styles.itemBox}>{item}</div>
          ))}
        </div>
      </article>

      <article style={styles.card}>
        <h2 style={styles.subTitle}>Integrated App Solution</h2>
        <div style={styles.boxList}>
          {solution.map((item) => (
            <div key={item} style={styles.itemBox}>{item}</div>
          ))}
        </div>
      </article>
    </div>

    <article style={styles.resultCard}>
      <p style={styles.resultLabel}>Result</p>
      <p style={styles.resultText}>
        A smoother, smarter visitor journey with better learning and engagement.
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
    margin: `0 0 ${spacing.sm} 0`,
    color: colors.accent,
    fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
    fontWeight: fonts.weightBold,
    textTransform: "uppercase",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
    gap: spacing.sm,
    width: "100%",
    maxWidth: "1120px",
  },
  card: {
    ...slideUi.card,
    boxSizing: "border-box",
    padding: "clamp(0.8rem, 1.6vw, 1.15rem)",
    minHeight: "clamp(170px, 28vh, 250px)",
  },
  subTitle: {
    margin: `0 0 ${spacing.xs} 0`,
    color: colors.accent,
    fontFamily: fonts.display,
    fontSize: "clamp(1.2rem, 2.1vw, 1.65rem)",
    lineHeight: 1.08,
  },
  boxList: {
    margin: 0,
    display: "grid",
    gap: "clamp(0.42rem, 0.9vw, 0.62rem)",
  },
  itemBox: {
    background: colors.bgSubtle,
    border: `1px solid ${colors.borderSubtle}`,
    borderRadius: "6px",
    padding: "clamp(0.5rem, 1vw, 0.78rem)",
    color: colors.textSecondary,
    fontSize: "clamp(1rem, 1.35vw, 1.12rem)",
    lineHeight: 1.28,
  },
  resultCard: {
    ...slideUi.card,
    boxSizing: "border-box",
    margin: `${spacing.sm} 0 0 0`,
    maxWidth: "1120px",
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
