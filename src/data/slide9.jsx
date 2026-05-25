import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const governancePoints = [
  "Well-planned garden zoning and land use",
];

const peoplePoints = [
  "Education and outreach center for sustainable practice and plant conservation",
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Frame these as enabling pillars: strong governance keeps the landscape coherent while Smart People scales impact through education."
  >
    <p style={slideText.eyebrow}>Minor Contribution</p>
    <h1 style={slideText.heading}>Smart Governance and Smart People</h1>
    <MinorContributionGrid />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Minor Contribution</p>
    <h1 style={slideText.heading}>Smart Governance and Smart People</h1>
    <MinorContributionGrid />
  </SlideShell>
);

function MinorContributionGrid() {
  return (
    <div style={styles.grid}>
      <article style={styles.card}>
        <h2 style={styles.subTitle}>Smart Governance</h2>
        <ul style={styles.list}>
          {governancePoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>

      <article style={styles.card}>
        <h2 style={styles.subTitle}>Smart People</h2>
        <ul style={styles.list}>
          {peoplePoints.map((point) => (
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
    gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
    gap: spacing.sm,
    width: "100%",
    maxWidth: "1080px",
  },
  card: {
    ...slideUi.card,
    boxSizing: "border-box",
    padding: "clamp(0.9rem, 2vw, 1.4rem)",
    minHeight: "clamp(180px, 30vh, 250px)",
  },
  subTitle: {
    color: colors.accent,
    fontFamily: fonts.display,
    fontSize: "clamp(1.35rem, 2.5vw, 2rem)",
    lineHeight: 1.05,
    margin: `0 0 ${spacing.xs} 0`,
  },
  list: {
    margin: 0,
    paddingLeft: "1.15rem",
    display: "grid",
    gap: "0.3rem",
  },
  item: {
    color: colors.textSecondary,
    fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
    lineHeight: 1.38,
  },
};
