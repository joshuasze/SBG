import SlideShell from "./SlideShell.jsx";
import { slideText } from "./slideTheme.js";
import lastSlideBackgroundPath from "../assets/photos/last slide/last slide.jpg";
import lastSlideAccentPath from "../assets/photos/last slide/last slide 2.jpg";

function ThankYouContent() {
  return (
    <>
      <h1 style={slideText.title}>Thanks for bee-ing here</h1>
      <p style={slideText.subtitle}>Don&apos;t forget to &quot;leaf&quot; us a like!!</p>
      <img src={lastSlideAccentPath} alt="" style={styles.accentImage} />
    </>
  );
}

export const PresenterSlide = () => (
  <SlideShell photo={lastSlideBackgroundPath} align="left" overlayStyle={styles.backgroundOverlay}>
    <ThankYouContent />
  </SlideShell>
);

export const AudienceSlide = () => (
  <SlideShell photo={lastSlideBackgroundPath} align="left" overlayStyle={styles.backgroundOverlay}>
    <ThankYouContent />
  </SlideShell>
);

const styles = {
  backgroundOverlay: {
    background:
      "linear-gradient(90deg, rgba(5, 12, 9, 0.62) 0%, rgba(5, 12, 9, 0.34) 48%, rgba(5, 12, 9, 0.08) 100%)",
  },
  accentImage: {
    borderRadius: "8px",
    display: "block",
    marginTop: "clamp(1.25rem, 3vw, 2.5rem)",
    maxHeight: "min(32svh, 300px)",
    maxWidth: "min(720px, 100%)",
    objectFit: "contain",
    width: "min(720px, 100%)",
  },
};
