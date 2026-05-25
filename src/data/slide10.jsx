import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";
import xjpFlower from "../assets/photos/XJPflower.png";

const smartLivingPoints = [
  "Supply of publicly accessible green space",
  "A place for movie screenings, community concerts, and shows",
  "Accessibility: Braille support and different languages",
];

const smartEconomyPoints = [
  "Attracts tourists and talent",
  "Differential pricing for tourists",
  "Orchid diplomacy, including named orchids for Obama, Xi Jinping, and Pope Francis",
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
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
    <div style={styles.layout}>
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

      <aside style={styles.imagePanel}>
        <p style={styles.imageEyebrow}>Orchid Diplomacy</p>
        <img
          src={xjpFlower}
          alt="XJP orchid flower"
          style={styles.image}
          loading="lazy"
          decoding="async"
        />
      </aside>
    </div>
  );
}

const styles = {
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(220px, 360px)",
    gap: spacing.sm,
    width: "100%",
    maxWidth: "1240px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
    gap: spacing.sm,
    width: "100%",
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
    fontSize: "clamp(1rem, 1.55vw, 1.12rem)",
    lineHeight: 1.36,
  },
  imagePanel: {
    ...slideUi.card,
    boxSizing: "border-box",
    display: "grid",
    gap: "0.6rem",
    alignContent: "start",
    padding: "clamp(0.75rem, 1.8vw, 1.1rem)",
  },
  imageEyebrow: {
    margin: 0,
    color: colors.accent,
    fontSize: "0.87rem",
    fontWeight: fonts.weightBold,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  image: {
    width: "100%",
    height: "clamp(240px, 36vh, 420px)",
    objectFit: "cover",
    borderRadius: "8px",
    border: `1px solid ${colors.border}`,
    boxSizing: "border-box",
  },
};
