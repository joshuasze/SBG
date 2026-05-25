import { colors, fonts } from "../styles/tokens.js";
import { slideText, slideUi } from "./slideTheme.js";

const featuredSites = [
  {
    title: "Primary Rainforest",
    body: "A rare 6-hectare fragment of Singapore's original tropical rainforest, older than the Gardens itself, with 314 plant species and many rare native species.",
  },
  {
    title: "National Orchid Garden",
    body: "The world's largest tropical orchid display, with over 1,000 species and 2,000 hybrids, supporting orchid breeding, research, and endangered species conservation.",
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
      <div style={styles.stage}>
        {children}
      </div>
    </div>
  );
}

function SlideContent() {
  return (
    <section style={styles.layout}>
      <h1 style={styles.title}>Feature 1: Conservation & Biodiversity</h1>
      <p style={styles.lede}>
        Singapore Botanic Gardens protects biodiversity through two major
        strengths:
      </p>

      <div style={styles.cardGrid}>
        {featuredSites.map((site) => (
          <article key={site.title} style={styles.card}>
            <h2 style={styles.cardTitle}>{site.title}</h2>
            <p style={styles.cardBody}>{site.body}</p>
          </article>
        ))}
      </div>

      <div style={styles.bottomGrid}>
        <p style={styles.sideNote}>
          Other conservation efforts include Ginger Garden, Swan Lake, and the
          Seed Bank.
        </p>
        <p style={styles.takeaway}>
          The Gardens combines preserved natural habitat with active scientific
          conservation.
        </p>
      </div>
    </section>
  );
}

const styles = {
  page: {
    background:
      "linear-gradient(135deg, #07110d 0%, #102219 48%, #18251b 100%)",
    color: colors.textPrimary,
    fontFamily: fonts.family,
    minHeight: "100%",
    overflowX: "hidden",
    position: "relative",
    width: "100%",
  },
  canopy: {
    background:
      "radial-gradient(circle at 76% 16%, rgba(215, 168, 79, 0.18), transparent 24%), radial-gradient(circle at 16% 88%, rgba(79, 122, 89, 0.32), transparent 30%)",
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
    ...slideText.heading,
    fontSize: "clamp(2.45rem, 5.15vw, 4.9rem)",
    lineHeight: 0.92,
    margin: 0,
    maxWidth: "1280px",
    overflowWrap: "break-word",
  },
  lede: {
    color: colors.textSecondary,
    fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)",
    lineHeight: 1.38,
    margin: 0,
    maxWidth: "860px",
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
  cardBody: {
    color: colors.textSecondary,
    fontSize: "clamp(0.9rem, 1.25vw, 1.05rem)",
    lineHeight: 1.38,
    margin: 0,
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
    fontSize: "clamp(0.86rem, 1.1vw, 0.96rem)",
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
    fontSize: "clamp(0.95rem, 1.45vw, 1.16rem)",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.32,
    margin: 0,
    padding: "0.85rem 1rem",
  },
};
