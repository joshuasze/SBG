import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";
import innovationDeliveryPath from "../assets/photos/slide10/IMG_20260523_124002.jpg";
import nurseryPath from "../assets/photos/slide10/IMG_4338.jpg";
import orchidPath from "../assets/photos/slide10/IMG_7553.jpg";
import researchPath from "../assets/photos/slide10/IMG_4249.jpg";
import innovationPath from "../assets/photos/slide10/slide 11_a.jpg";
import digitalPath from "../assets/photos/slide10/IMG_4284.jpg";

const innovationPoints = [
  "Rubber tree innovation",
  "Orchid breeding",
  "Orchid Cool House",
];

const researchPoints = [
  "Produced many research papers",
];

const digitalPoints = [
  "Leading the digitalization effort",
  "Digital twin",
];

const audiencePhotos = [
  { src: innovationDeliveryPath, alt: "Smart environment innovation display", variant: "large" },
  { src: nurseryPath, alt: "Plant nursery and innovation area", variant: "tall" },
  { src: innovationPath, alt: "Innovation and delivery garden feature", variant: "wide" },
  { src: orchidPath, alt: "Orchid breeding and plant innovation", variant: "tall" },
  { src: researchPath, alt: "Research center and garden science display", variant: "large" },
  { src: digitalPath, alt: "Digitalization effort in the Gardens", variant: "tall" },
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo ?? innovationDeliveryPath}
    align="left"
  >
    <p style={styles.eyebrow}>Singapore as a Smart City</p>
    <h1 style={styles.heading}>Smart Environment: Innovation and Delivery</h1>
    <SmartEnvironmentContinuation />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo ?? innovationDeliveryPath} align="left">
    <AudiencePhotoCollage />
  </SlideShell>
);

function SmartEnvironmentContinuation() {
  return (
    <div style={styles.grid}>
      <article style={styles.card}>
        <h2 style={styles.cardTitle}>Nursery and Innovation</h2>
        <ul style={styles.list}>
          {innovationPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>

      <article style={styles.card}>
        <h2 style={styles.cardTitle}>Research Center</h2>
        <ul style={styles.list}>
          {researchPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>

      <article style={styles.card}>
        <h2 style={styles.cardTitle}>Digitalization Spearhead</h2>
        <ul style={styles.list}>
          {digitalPoints.map((point) => (
            <li key={point} style={styles.item}>{point}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function AudiencePhotoCollage() {
  return (
    <section style={styles.audienceLayout} aria-label="Smart environment innovation photo collage">
      <div>
        <p style={styles.eyebrow}>Singapore as a Smart City</p>
        <h1 style={styles.audienceTitle}>
          Smart Environment: Innovation and Delivery
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
    gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
    gap: spacing.sm,
    width: "100%",
    maxWidth: "1120px",
  },
  card: {
    ...slideUi.card,
    background: "rgba(4, 10, 7, 0.66)",
    backdropFilter: "blur(4px)",
    boxSizing: "border-box",
    padding: "clamp(0.85rem, 1.8vw, 1.25rem)",
    minHeight: "clamp(160px, 22vh, 210px)",
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.15rem, 2.1vw, 1.6rem)",
    lineHeight: 1.08,
    margin: `0 0 ${spacing.xs} 0`,
  },
  list: {
    margin: 0,
    paddingLeft: "1.1rem",
    display: "grid",
    gap: "0.25rem",
  },
  item: {
    color: colors.textSecondary,
    fontSize: "clamp(0.97rem, 1.45vw, 1.09rem)",
    lineHeight: 1.34,
  },
};
