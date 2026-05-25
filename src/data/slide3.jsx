import gardenMap from "../assets/garden-map.png";
import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideUi } from "./slideTheme.js";

const pillars = [
  "Conservation & Biodiversity",
  "Education, Wellness & Human Experience",
  "Heritage, Culture & Urban Identity",
];

export const PresenterSlide = () => (
  <SlideShell
    photo={gardenMap}
    align="left"
    note="Use the map background to frame the Gardens as both a managed biodiversity site and an everyday civic landscape."
  >
    <SlideContent />
  </SlideShell>
);

export const AudienceSlide = () => (
  <SlideShell photo={gardenMap} align="left">
    <SlideContent />
  </SlideShell>
);

function SlideContent() {
  return (
    <section style={styles.panel}>
      <p style={styles.lede}>
        Founded in 1859, Singapore Botanic Gardens is a 165-year-old tropical
        garden and Singapore&rsquo;s first UNESCO World Heritage Site.
      </p>

      <div style={styles.divider} />

      <div style={styles.comboBlock}>
        <p style={styles.kicker}>It combines:</p>
        <div style={styles.pillars}>
          {pillars.map((pillar) => (
            <p key={pillar} style={styles.pillar}>
              {pillar}
            </p>
          ))}
        </div>
      </div>

      <p style={styles.focus}>
        Today&rsquo;s focus: how the Gardens works as both a biodiversity site
        and a public urban space.
      </p>
    </section>
  );
}

const styles = {
  panel: {
    ...slideUi.card,
    background:
      "linear-gradient(145deg, rgba(11, 23, 18, 0.92), rgba(20, 37, 28, 0.78))",
    boxSizing: "border-box",
    margin: "clamp(0.25rem, 2vw, 1rem) 0",
    maxWidth: "780px",
    padding: "clamp(1.1rem, 4vw, 3rem)",
    width: "min(100%, 780px)",
  },
  lede: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.65rem, 4.8vw, 4rem)",
    fontWeight: fonts.weightBold,
    lineHeight: 1.04,
    margin: 0,
    maxWidth: "720px",
  },
  divider: {
    background:
      "linear-gradient(90deg, rgba(215, 168, 79, 0.95), rgba(215, 168, 79, 0))",
    height: "3px",
    margin: "clamp(1rem, 3vw, 1.75rem) 0",
    width: "min(260px, 70%)",
  },
  comboBlock: {
    display: "grid",
    gap: spacing.sm,
  },
  kicker: {
    color: colors.accent,
    fontSize: "clamp(0.84rem, 1.8vw, 1rem)",
    fontWeight: fonts.weightBold,
    letterSpacing: "0.14em",
    margin: 0,
    textTransform: "uppercase",
  },
  pillars: {
    display: "grid",
    gap: "0.65rem",
  },
  pillar: {
    background: "rgba(245, 240, 230, 0.08)",
    border: `1px solid ${colors.border}`,
    borderLeft: `4px solid ${colors.accent}`,
    boxSizing: "border-box",
    color: colors.textSecondary,
    fontSize: "clamp(1rem, 2.4vw, 1.25rem)",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.3,
    margin: 0,
    padding: "clamp(0.7rem, 2vw, 0.95rem) clamp(0.8rem, 2.4vw, 1.1rem)",
  },
  focus: {
    color: colors.textPrimary,
    fontSize: "clamp(1rem, 2.3vw, 1.3rem)",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.45,
    margin: "clamp(1rem, 3vw, 1.75rem) 0 0 0",
    maxWidth: "680px",
  },
};
