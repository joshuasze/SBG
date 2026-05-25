import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const innovationPoints = [
  "Rubber tree innovation",
  "Orchid breeding",
];

const researchPoints = [
  "Produced many research papers",
];

const digitalPoints = [
  "Leading the digitalization effort",
  "Digital twin",
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Position this as the continuation of Smart Environment through innovation, research, and digital leadership."
  >
    <p style={slideText.eyebrow}>Singapore as a Smart City</p>
    <h1 style={slideText.heading}>Smart Environment: Innovation and Delivery</h1>
    <SmartEnvironmentContinuation />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Singapore as a Smart City</p>
    <h1 style={slideText.heading}>Smart Environment: Innovation and Delivery</h1>
    <SmartEnvironmentContinuation />
  </SlideShell>
);

function SmartEnvironmentContinuation() {
  return (
    <div style={styles.grid}>
      <article style={styles.card}>
        <h2 style={styles.cardTitle}>Nursery and Innovation</h2>
        <ul style={styles.list}>
          {innovationPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>

      <article style={styles.card}>
        <h2 style={styles.cardTitle}>Research Center</h2>
        <ul style={styles.list}>
          {researchPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>

      <article style={styles.card}>
        <h2 style={styles.cardTitle}>Digitalization Spearhead</h2>
        <ul style={styles.list}>
          {digitalPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
    gap: spacing.sm,
    width: "100%",
    maxWidth: "1120px",
  },
  card: {
    ...slideUi.card,
    boxSizing: "border-box",
    padding: "clamp(0.85rem, 1.8vw, 1.25rem)",
    minHeight: "clamp(160px, 22vh, 210px)",
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.15rem, 2.1vw, 1.6rem)",
    lineHeight: 1.08,
    margin: `0 0 ${spacing.xs} 0`,
  },
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    display: "grid",
    gap: "0.25rem",
  },
  item: {
    color: colors.textSecondary,
    fontSize: "clamp(0.85rem, 1.3vw, 0.97rem)",
    lineHeight: 1.34,
  },
};
