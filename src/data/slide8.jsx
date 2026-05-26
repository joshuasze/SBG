import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";
import smartEnvironmentPath from "../assets/photos/slide9/IMG_4407.jpg";
import biodiversityPath from "../assets/photos/slide9/IMG_4373.jpg";
import projectPath from "../assets/photos/slide9/SGP project.png";
import canopyPath from "../assets/photos/slide9/slide11_c.jpg";
import preservationPath from "../assets/photos/slide9/slide11_b.jpg";
import gardenPath from "../assets/photos/slide9/IMG_4468.jpg";
import rainforestPath from "../assets/photos/slide9/slide5_g .jpg";
import naturePath from "../assets/photos/slide9/IMG_4308.jpg";

const embodimentPoints = [
  "82 hectares of greenery",
  "167 years of legacy (since 1859)",
];

const biodiversityPoints = [
  "More than 10,000 species of flora",
  "Home to many animals",
  "Seed Bank",
  "Examples: the Dell and the primary rainforest",
];

const audiencePhotos = [
  { src: projectPath, alt: "Singapore project smart environment visual", variant: "wide" },
  { src: biodiversityPath, alt: "Biodiversity in Singapore Botanic Gardens", variant: "tall" },
  { src: smartEnvironmentPath, alt: "Smart environment garden contribution", variant: "large" },
  { src: canopyPath, alt: "Green canopy and preserved plant life", variant: "tall" },
  { src: preservationPath, alt: "Preservation area in the Gardens", variant: "tall" },
  { src: gardenPath, alt: "City in nature garden landscape", variant: "large" },
  { src: rainforestPath, alt: "Primary rainforest greenery", variant: "wide" },
  { src: naturePath, alt: "Nature trail in Singapore Botanic Gardens", variant: "tall" },
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo ?? smartEnvironmentPath}
    align="left"
  >
    <p style={styles.eyebrow}>Singapore as a Smart City</p>
    <h1 style={styles.heading}>Smart Environment: The Major Contribution</h1>
    <SmartEnvironmentContent />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo ?? smartEnvironmentPath} align="left">
    <AudiencePhotoCollage />
  </SlideShell>
);

function SmartEnvironmentContent() {
  return (
    <div style={styles.grid}>
      <article style={styles.card}>
        <h2 style={styles.cardTitle}>Physical Embodiment: City in Nature</h2>
        <ul style={styles.list}>
          {embodimentPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>

      <article style={styles.card}>
        <h2 style={styles.cardTitle}>Biodiversity and Preservation</h2>
        <ul style={styles.list}>
          {biodiversityPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function AudiencePhotoCollage() {
  return (
    <section style={styles.audienceLayout} aria-label="Smart environment photo collage">
      <div>
        <p style={styles.eyebrow}>Singapore as a Smart City</p>
        <h1 style={styles.audienceTitle}>
          Smart Environment: The Major Contribution
        </h1>
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
  eyebrow: {
    ...slideText.eyebrow,
    textShadow: "0 2px 12px rgba(0, 0, 0, 0.78)",
  },
  heading: {
    ...slideText.heading,
    textShadow: "0 3px 18px rgba(0, 0, 0, 0.72)",
  },
  audienceLayout: {
    display: "grid",
    gap: "clamp(0.85rem, 1.5vw, 1.25rem)",
    width: "100%",
  },
  audienceTitle: {
    ...slideText.heading,
    fontSize: "clamp(1.9rem, 4.2vw, 3.9rem)",
    lineHeight: 0.96,
    margin: 0,
    maxWidth: "1120px",
    overflowWrap: "break-word",
    textShadow: "0 3px 18px rgba(0, 0, 0, 0.72)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
    gap: spacing.sm,
    width: "100%",
    maxWidth: "1060px",
  },
  card: {
    ...slideUi.card,
    background: "rgba(4, 10, 7, 0.66)",
    backdropFilter: "blur(4px)",
    boxSizing: "border-box",
    padding: "clamp(0.9rem, 2vw, 1.4rem)",
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.2rem, 2.4vw, 1.8rem)",
    lineHeight: 1.05,
    margin: `0 0 ${spacing.xs} 0`,
  },
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    display: "grid",
    gap: "0.3rem",
  },
  item: {
    color: colors.textSecondary,
    fontSize: "clamp(0.88rem, 1.45vw, 1rem)",
    lineHeight: 1.38,
  },
};
