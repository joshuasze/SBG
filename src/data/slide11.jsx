import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";
import governancePeoplePath from "../assets/photos/slide12/IMG_4399.jpg";
import governancePath from "../assets/photos/slide12/IMG_4489.jpg";
import outreachPath from "../assets/photos/slide12/IMG_9091.jpg";
import zoningPath from "../assets/photos/slide12/IMG_9079.jpg";
import educationPath from "../assets/photos/slide12/IMG_4405.jpg";
import practicePath from "../assets/photos/slide12/IMG_9080.jpg";
import peoplePath from "../assets/photos/slide12/IMG_4409.jpg";
import conservationPath from "../assets/photos/slide12/IMG_4394.jpg";
import learningPath from "../assets/photos/slide12/IMG_4441.jpg";
import stewardshipPath from "../assets/photos/slide12/IMG_4454.jpg";
import gardenPath from "../assets/photos/slide12/IMG_4252.jpg";

const governancePoints = [
  "Well-planned garden zoning and land use",
];

const peoplePoints = [
  "Education and outreach center for sustainable practice and plant conservation",
];

const audiencePhotos = [
  { src: governancePath, alt: "Smart governance garden planning area", variant: "tall" },
  { src: outreachPath, alt: "Education and outreach in the Gardens", variant: "large" },
  { src: governancePeoplePath, alt: "Smart people and governance display", variant: "tall" },
  { src: zoningPath, alt: "Well-planned garden zoning and land use", variant: "wide" },
  { src: educationPath, alt: "Plant conservation education area", variant: "tall" },
  { src: practicePath, alt: "Sustainable practice in a garden landscape", variant: "wide" },
  { src: peoplePath, alt: "Smart people learning experience", variant: "tall" },
  { src: conservationPath, alt: "Plant conservation feature", variant: "large" },
  { src: learningPath, alt: "Learning and outreach garden display", variant: "tall" },
  { src: stewardshipPath, alt: "Stewardship and sustainable practice", variant: "tall" },
  { src: gardenPath, alt: "Garden space supporting smart people", variant: "tall" },
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo ?? governancePeoplePath}
    align="left"
  >
    <p style={styles.eyebrow}>Minor Contribution</p>
    <h1 style={styles.heading}>Smart Governance and Smart People</h1>
    <MinorContributionGrid />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo ?? governancePeoplePath} align="left">
    <AudiencePhotoCollage />
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

function AudiencePhotoCollage() {
  return (
    <section style={styles.audienceLayout} aria-label="Smart governance and people photo collage">
      <div>
        <p style={styles.eyebrow}>Minor Contribution</p>
        <h1 style={styles.audienceTitle}>
          Smart Governance and Smart People
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
    gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
    gap: spacing.sm,
    width: "100%",
    maxWidth: "1080px",
  },
  card: {
    ...slideUi.card,
    background: "rgba(4, 10, 7, 0.66)",
    backdropFilter: "blur(4px)",
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
    fontSize: "clamp(1.02rem, 1.55vw, 1.12rem)",
    lineHeight: 1.38,
  },
};
