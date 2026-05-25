import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const smartLivingPoints = [
  "Supply of publicly accessible green space",
  "Movie screenings",
  "A place for community concerts and shows",
  "Inclusive access: Braille support and different languages",
];

const smartEconomyPoints = [
  "Attracts tourists and talent",
  "Differential pricing for tourists",
  "Orchid diplomacy",
  "Named orchids: Obama, Xi Jinping, Pope Francis",
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Use this to show the spillover value: social wellbeing through Smart Living and national positioning through Smart Economy."
  >
    <p style={slideText.eyebrow}>Secondary Contributions</p>
    <h1 style={slideText.heading}>Smart Living and Smart Economy</h1>
    <SecondaryContributionGrid />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Secondary Contributions</p>
    <h1 style={slideText.heading}>Smart Living and Smart Economy</h1>
    <SecondaryContributionGrid />
  </SlideShell>
);

function SecondaryContributionGrid() {
  return (
    <div style={styles.grid}>
      <article style={styles.card}>
        <h2 style={styles.subTitle}>Smart Living</h2>
        <ul style={styles.list}>
          {smartLivingPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>

      <article style={styles.card}>
        <h2 style={styles.subTitle}>Smart Economy</h2>
        <ul style={styles.list}>
          {smartEconomyPoints.map((point) => (
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
    maxWidth: "1120px",
  },
  card: {
    ...slideUi.card,
    boxSizing: "border-box",
    padding: "clamp(0.9rem, 2vw, 1.4rem)",
    minHeight: "clamp(220px, 36vh, 320px)",
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
    gap: "0.32rem",
  },
  item: {
    color: colors.textSecondary,
    fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
    lineHeight: 1.36,
  },
};
