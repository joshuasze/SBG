import { colors, fonts } from "../styles/tokens.js";
import { slideUi } from "./slideTheme.js";

const experienceSites = [
  {
    title: "Evolution Garden",
    points: [
      "1.5-hectare outdoor trail",
      "Presents the history of plant life on Earth",
      "Moves from primitive plants to modern flowering species",
    ],
  },
  {
    title: "Healing Garden",
    points: [
      "2.5-hectare garden with over 400 medicinal plant species",
      "Shows the connection between plants and traditional medicine",
      "Links plant knowledge with human wellbeing",
    ],
  },
];

export const PresenterSlide = () => (
  <SlideFrame>
    <SlideContent />
  </SlideFrame>
);

export const AudienceSlide = () => (
  <SlideFrame>
    <SlideContent />
  </SlideFrame>
);

function SlideFrame({ children }) {
  return (
    <div style={styles.page}>
      <div style={styles.canopy} />
      <div style={styles.stage}>{children}</div>
    </div>
  );
}

function SlideContent() {
  return (
    <section style={styles.layout}>
      <h1 style={styles.title}>
        Feature 2: Education, Wellness & Human Experience
      </h1>
      <p style={styles.lede}>
        Singapore Botanic Gardens turns plant knowledge into a walkable,
        sensory, and personal experience.
      </p>

      <div style={styles.cardGrid}>
        {experienceSites.map((site) => (
          <article key={site.title} style={styles.card}>
            <h2 style={styles.cardTitle}>{site.title}</h2>
            <ul style={styles.list}>
              {site.points.map((point) => (
                <li key={point} style={styles.item}>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div style={styles.bottomGrid}>
        <p style={styles.sideNote}>
          Other human-centered experiences include Jacob Ballas Children&apos;s
          Garden, Ethnobotany Garden, picnics, outdoor events, and social
          gatherings.
        </p>
        <p style={styles.takeaway}>
          The Gardens is a place where people learn, heal, relax, and connect
          with nature.
        </p>
      </div>
    </section>
  );
}

const styles = {
  page: {
    background:
      "linear-gradient(135deg, #07110d 0%, #11231b 48%, #20261b 100%)",
    color: colors.textPrimary,
    fontFamily: fonts.family,
    minHeight: "100%",
    overflowX: "hidden",
    position: "relative",
    width: "100%",
  },
  canopy: {
    background:
      "radial-gradient(circle at 78% 18%, rgba(215, 168, 79, 0.16), transparent 24%), radial-gradient(circle at 14% 86%, rgba(79, 122, 89, 0.34), transparent 30%)",
    inset: 0,
    position: "absolute",
  },
  stage: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    minHeight: "100%",
    padding: "clamp(1rem, 2.4vw, 2.35rem)",
    position: "relative",
    width: "min(100%, 1440px)",
    zIndex: 1,
  },
  layout: {
    display: "grid",
    gap: "clamp(0.75rem, 1.6vw, 1.15rem)",
    width: "100%",
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(2.35rem, 4.8vw, 4.55rem)",
    fontWeight: fonts.weightBold,
    lineHeight: 0.94,
    margin: 0,
    maxWidth: "1320px",
    overflowWrap: "break-word",
  },
  lede: {
    color: colors.textSecondary,
    fontSize: "clamp(1.07rem, 1.65vw, 1.37rem)",
    lineHeight: 1.38,
    margin: 0,
    maxWidth: "880px",
  },
  cardGrid: {
    display: "grid",
    gap: "clamp(0.85rem, 1.6vw, 1.25rem)",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 25rem), 1fr))",
  },
  card: {
    ...slideUi.card,
    boxSizing: "border-box",
    minHeight: "clamp(210px, 25vh, 270px)",
    padding: "clamp(0.9rem, 1.8vw, 1.45rem)",
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.45rem, 2.45vw, 2.25rem)",
    lineHeight: 1.04,
    margin: "0 0 0.75rem 0",
    overflowWrap: "break-word",
  },
  list: {
    display: "grid",
    gap: "0.45rem",
    margin: 0,
    paddingLeft: "1.1rem",
  },
  item: {
    color: colors.textSecondary,
    fontSize: "clamp(0.98rem, 1.3vw, 1.1rem)",
    lineHeight: 1.3,
    paddingLeft: "0.05rem",
  },
  bottomGrid: {
    display: "grid",
    gap: "clamp(0.75rem, 1.4vw, 1rem)",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
  },
  sideNote: {
    background: "rgba(245, 240, 230, 0.07)",
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    color: colors.textSecondary,
    fontSize: "clamp(0.98rem, 1.25vw, 1.08rem)",
    lineHeight: 1.34,
    margin: 0,
    padding: "0.75rem 0.85rem",
  },
  takeaway: {
    background: "rgba(79, 122, 89, 0.25)",
    border: `1px solid ${colors.border}`,
    borderLeft: `4px solid ${colors.accent}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    color: colors.textPrimary,
    fontSize: "clamp(1.07rem, 1.6vw, 1.28rem)",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.32,
    margin: 0,
    padding: "0.85rem 1rem",
  },
};
