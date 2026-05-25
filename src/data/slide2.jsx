import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
  >
    <p style={slideText.eyebrow}>Audience Check-In</p>
    <h1 style={slideText.heading}>Quick Poll</h1>
    <div style={styles.pollPlacard}>
      <p style={styles.question}>Can you find an animal in this picture?</p>
      <p style={styles.body}>Open the poll when you are ready to collect live responses.</p>
    </div>
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Audience Check-In</p>
    <h1 style={slideText.heading}>Quick Poll</h1>
    <div style={styles.pollPlacard}>
      <p style={styles.question}>Waiting for the presenter to open the poll...</p>
      <p style={styles.body}>Look closely at the picture, then answer when the poll is live.</p>
    </div>
  </SlideShell>
);

const styles = {
  pollPlacard: {
    ...slideUi.card,
    borderTop: `3px solid ${colors.accent}`,
    boxSizing: "border-box",
    maxWidth: "680px",
    padding: "clamp(1rem, 3vw, 2rem)",
    width: "100%",
  },
  question: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.4rem, 3vw, 2.8rem)",
    lineHeight: 1.05,
    margin: `0 0 ${spacing.sm} 0`,
  },
  body: {
    color: colors.textSecondary,
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    lineHeight: fonts.lineHeight,
    margin: 0,
  },
};
