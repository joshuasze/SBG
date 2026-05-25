import { colors, fonts } from "../styles/tokens.js";
import { slideUi } from "./slideTheme.js";

const heritageSites = [
  {
    title: "Heritage Museum",
    points: [
      "Located in Holttum Hall, a 1921 conservation building",
      "Presents over 160 years of the Gardens' history",
      "Connects colonial botany, rubber research, orchid breeding, and UNESCO heritage",
    ],
  },
  {
    title: "VIP Orchid Garden",
    points: [
      "Displays orchid hybrids named after world leaders, dignitaries, and celebrities",
      "Represents Singapore's tradition of orchid diplomacy",
      "Turns living plants into symbols of national identity and international relations",
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
      <h1 style={styles.title}>Feature 3: Heritage, Culture & Urban Identity</h1>
      <p style={styles.lede}>
        Singapore Botanic Gardens reflects Singapore&apos;s history, diplomacy,
        and identity through living landscapes and heritage spaces.
      </p>

      <div style={styles.cardGrid}>
        {heritageSites.map((site) => (
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
          Other heritage and cultural spaces include Swan Lake and Symphony
          Lake.
        </p>
        <p style={styles.takeaway}>
          The Gardens is not only natural heritage, but also a cultural landmark
          in Singapore&apos;s urban identity.
        </p>
      </div>
    </section>
  );
}

const styles = {
  page: {
    background:
      "linear-gradient(135deg, #07110d 0%, #122118 46%, #24271b 100%)",
    color: colors.textPrimary,
    fontFamily: fonts.family,
    minHeight: "100%",
    overflowX: "hidden",
    position: "relative",
    width: "100%",
  },
  canopy: {
    background:
      "radial-gradient(circle at 78% 18%, rgba(215, 168, 79, 0.18), transparent 24%), radial-gradient(circle at 14% 88%, rgba(79, 122, 89, 0.3), transparent 30%)",
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
    padding: "clamp(0.9rem, 2.2vw, 2.1rem)",
    position: "relative",
    width: "min(100%, 1440px)",
    zIndex: 1,
  },
  layout: {
    display: "grid",
    gap: "clamp(0.65rem, 1.35vw, 1rem)",
    width: "100%",
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(2.2rem, 4.55vw, 4.25rem)",
    fontWeight: fonts.weightBold,
    lineHeight: 0.94,
    margin: 0,
    maxWidth: "1320px",
    overflowWrap: "break-word",
  },
  lede: {
    color: colors.textSecondary,
    fontSize: "clamp(1.02rem, 1.5vw, 1.24rem)",
    lineHeight: 1.34,
    margin: 0,
    maxWidth: "920px",
  },
  cardGrid: {
    display: "grid",
    gap: "clamp(0.75rem, 1.4vw, 1.1rem)",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 25rem), 1fr))",
  },
  card: {
    ...slideUi.card,
    boxSizing: "border-box",
    minHeight: "clamp(230px, 29vh, 310px)",
    padding: "clamp(0.85rem, 1.55vw, 1.25rem)",
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.35rem, 2.25vw, 2.05rem)",
    lineHeight: 1.04,
    margin: "0 0 0.65rem 0",
    overflowWrap: "break-word",
  },
  list: {
    display: "grid",
    gap: "0.42rem",
    margin: 0,
    paddingLeft: "1.1rem",
  },
  item: {
    color: colors.textSecondary,
    fontSize: "clamp(0.94rem, 1.25vw, 1.08rem)",
    lineHeight: 1.3,
    paddingLeft: "0.05rem",
  },
  bottomGrid: {
    display: "grid",
    gap: "clamp(0.65rem, 1.25vw, 0.9rem)",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))",
  },
  sideNote: {
    background: "rgba(245, 240, 230, 0.07)",
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    color: colors.textSecondary,
    fontSize: "clamp(0.94rem, 1.15vw, 1.04rem)",
    lineHeight: 1.3,
    margin: 0,
    padding: "0.7rem 0.8rem",
  },
  takeaway: {
    background: "rgba(79, 122, 89, 0.25)",
    border: `1px solid ${colors.border}`,
    borderLeft: `4px solid ${colors.accent}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    color: colors.textPrimary,
    fontSize: "clamp(1rem, 1.4vw, 1.12rem)",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.3,
    margin: 0,
    padding: "0.75rem 0.9rem",
  },
};
