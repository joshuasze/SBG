import gardenMap from "../assets/garden-map.png";
import { colors, fonts, spacing } from "../styles/tokens.js";

const pillars = [
  "Conservation & Biodiversity",
  "Education, Wellness & Human Experience",
  "Heritage, Culture & Urban Identity",
];

export const PresenterSlide = () => <MapSlide showNote />;

export const AudienceSlide = () => <MapSlide />;

function MapSlide({ showNote = false }) {
  return (
    <div style={styles.page}>
      <img src={gardenMap} alt="" style={styles.map} />
      <div style={styles.scrim} />

      <main style={styles.content}>
        <p style={styles.lede}>
          Founded in 1859, Singapore Botanic Gardens is a 165-year-old tropical
          garden and Singapore&rsquo;s first UNESCO World Heritage Site.
        </p>

        <div style={styles.rule} />

        <section style={styles.section}>
          <p style={styles.kicker}>It combines:</p>
          <div style={styles.pillars}>
            {pillars.map((pillar) => (
              <p key={pillar} style={styles.pillar}>
                {pillar}
              </p>
            ))}
          </div>
        </section>

        <p style={styles.focus}>
          Today&rsquo;s focus: how the Gardens works as both a biodiversity site
          and a public urban space.
        </p>

        {showNote && (
          <p style={styles.note}>
            Presenter notes: Use the map to frame the Gardens as both a managed
            biodiversity site and an everyday civic landscape.
          </p>
        )}
      </main>
    </div>
  );
}

const textShadow = "0 2px 18px rgba(0, 0, 0, 0.62)";

const styles = {
  page: {
    background: colors.bgDark,
    color: colors.textPrimary,
    fontFamily: fonts.family,
    minHeight: "100%",
    position: "relative",
    width: "100%",
  },
  map: {
    height: "100%",
    inset: 0,
    objectFit: "cover",
    objectPosition: "center",
    position: "absolute",
    width: "100%",
  },
  scrim: {
    background:
      "linear-gradient(90deg, rgba(7, 17, 13, 0.92) 0%, rgba(7, 17, 13, 0.72) 34%, rgba(7, 17, 13, 0.28) 61%, rgba(7, 17, 13, 0.04) 100%)",
    inset: 0,
    position: "absolute",
  },
  content: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100%",
    maxWidth: "680px",
    padding:
      "clamp(1.25rem, 4.2vw, 4.2rem) clamp(1.25rem, 4.8vw, 5rem)",
    position: "relative",
    width: "min(100%, 680px)",
    zIndex: 1,
  },
  lede: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.55rem, 3.3vw, 3.3rem)",
    fontWeight: fonts.weightBold,
    lineHeight: 1.02,
    margin: 0,
    textShadow,
  },
  rule: {
    background:
      "linear-gradient(90deg, rgba(215, 168, 79, 0.96), rgba(215, 168, 79, 0))",
    height: "3px",
    margin: "clamp(0.75rem, 2vh, 1.25rem) 0",
    width: "min(230px, 68%)",
  },
  section: {
    display: "grid",
    gap: "clamp(0.45rem, 1.4vh, 0.75rem)",
  },
  kicker: {
    color: colors.accent,
    fontSize: "clamp(0.76rem, 1.5vw, 0.92rem)",
    fontWeight: fonts.weightBold,
    letterSpacing: "0.14em",
    margin: 0,
    textShadow,
    textTransform: "uppercase",
  },
  pillars: {
    display: "grid",
    gap: "clamp(0.3rem, 1vh, 0.5rem)",
  },
  pillar: {
    borderLeft: `3px solid ${colors.accent}`,
    color: colors.textSecondary,
    fontSize: "clamp(0.9rem, 1.8vw, 1.12rem)",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.24,
    margin: 0,
    padding: "0.12rem 0 0.12rem 0.72rem",
    textShadow,
  },
  focus: {
    color: colors.textPrimary,
    fontSize: "clamp(0.94rem, 1.8vw, 1.18rem)",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.34,
    margin: "clamp(0.8rem, 2vh, 1.25rem) 0 0 0",
    textShadow,
  },
  note: {
    borderLeft: `3px solid ${colors.accent}`,
    color: colors.textSecondary,
    fontSize: "clamp(0.72rem, 1.2vw, 0.82rem)",
    fontStyle: "italic",
    lineHeight: 1.35,
    margin: `${spacing.sm} 0 0 0`,
    maxWidth: "560px",
    paddingLeft: spacing.sm,
    textShadow,
  },
};
