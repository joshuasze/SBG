import { colors, fonts } from "../styles/tokens.js";
import { slideText, slideUi } from "./slideTheme.js";
import rainforestPath from "../assets/photos/on audience f1/slide5_g .jpg";
import palmPath from "../assets/photos/on audience f1/slide5_biooo.jpg";
import orchidPath from "../assets/photos/on audience f1/IMG_7567.jpg";
import biodiversityPath from "../assets/photos/on audience f1/slide5_biodiversity.jpg";
import orchidWalkPath from "../assets/photos/on audience f1/IMG_7569.jpg";
import leafPath from "../assets/photos/on audience f1/slide5_bio.jpg";
import canopyPath from "../assets/photos/on audience f1/IMG_7581.jpg";
import trailPath from "../assets/photos/on audience f1/slide5_a.jpg";
import gardenPath from "../assets/photos/on audience f1/IMG_7594.jpg";
import chickenPath from "../assets/photos/on audience f1/slide5_chicken.jpg";

const featuredSites = [
  {
    title: "Primary Rainforest",
    points: [
      "Rare 6-hectare fragment of Singapore's original tropical rainforest",
      "Older than the Gardens itself",
      "Home to 314 plant species and many rare native species",
    ],
  },
  {
    title: "National Orchid Garden",
    points: [
      "World's largest tropical orchid display",
      "Over 1,000 species and 2,000 hybrids",
      "Supports orchid breeding, research, and endangered species conservation",
    ],
  },
];

const audiencePhotos = [
  { src: rainforestPath, alt: "Rainforest greenery at Singapore Botanic Gardens", variant: "wide" },
  { src: palmPath, alt: "Tall palm fronds in the conservation area", variant: "tall" },
  { src: orchidPath, alt: "Visitor path surrounded by tropical planting", variant: "large" },
  { src: biodiversityPath, alt: "Biodiversity sign among garden plants", variant: "tall" },
  { src: orchidWalkPath, alt: "Garden walkway with dense planting", variant: "" },
  { src: leafPath, alt: "Close view of protected plant life", variant: "tall" },
  { src: canopyPath, alt: "Green canopy inside Singapore Botanic Gardens", variant: "large" },
  { src: trailPath, alt: "Feature 1 garden trail signage", variant: "tall" },
  { src: gardenPath, alt: "Dense tropical garden planting", variant: "tall" },
  { src: chickenPath, alt: "Wildlife in the Gardens", variant: "" },
];

export const PresenterSlide = () => (
  <SlideFrame>
    <SlideContent />
  </SlideFrame>
);

export const AudienceSlide = () => (
  <SlideFrame>
    <AudiencePhotoCollage />
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

function AudiencePhotoCollage() {
  return (
    <section style={styles.audienceLayout} aria-label="Feature 1 photo collage">
      <div style={styles.audienceHeader}>
        <p style={styles.audienceKicker}>Feature 1</p>
        <h1 style={styles.audienceTitle}>Conservation & Biodiversity</h1>
      </div>
      <div className="audience-photo-collage">
        {audiencePhotos.map((photo) => (
          <figure
            className={`audience-photo-collage__item ${
              photo.variant ? `is-${photo.variant}` : ""
            }`}
            key={photo.src}
          >
            <img src={photo.src} alt={photo.alt} loading="eager" />
          </figure>
        ))}
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
  audienceLayout: {
    display: "grid",
    gap: "clamp(0.85rem, 1.5vw, 1.25rem)",
    width: "100%",
  },
  audienceHeader: {
    alignItems: "end",
    display: "grid",
    gap: "0.35rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 19rem), 1fr))",
  },
  audienceKicker: {
    color: colors.accent,
    fontSize: "clamp(0.82rem, 1.45vw, 0.98rem)",
    fontWeight: fonts.weightBold,
    margin: 0,
    textTransform: "uppercase",
  },
  audienceTitle: {
    ...slideText.heading,
    fontSize: "clamp(2rem, 4.5vw, 4.25rem)",
    lineHeight: 0.94,
    margin: 0,
    overflowWrap: "break-word",
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
    fontSize: "clamp(1.07rem, 1.65vw, 1.37rem)",
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
