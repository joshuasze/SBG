import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note='Click "Open Poll" in the presenter bar to send the question to audience devices.'
  >
    <p style={slideText.eyebrow}>Audience Check-In</p>
    <h1 style={slideText.heading}>Quick Poll</h1>
    <div style={styles.pollPlacard}>
      <p style={styles.question}>Which part of the Gardens would you most want to explore?</p>
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
      <p style={styles.body}>Your choices will appear below when the poll is live.</p>
    </div>
  </SlideShell>
);

const styles = {
  pollPlacard: {
    ...slideUi.card,
    borderTop: `3px solid ${colors.accent}`,
    maxWidth: "680px",
    padding: spacing.lg,
  },
  question: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
    lineHeight: 1.05,
    margin: `0 0 ${spacing.sm} 0`,
  },
  body: {
    color: colors.textSecondary,
    fontSize: fonts.sizeBase,
    lineHeight: fonts.lineHeight,
    margin: 0,
  },
};
