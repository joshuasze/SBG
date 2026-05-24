import { colors, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText } from "./slideTheme.js";

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Open with the garden as a living UNESCO heritage landscape, then invite the audience into the story."
  >
    <p style={slideText.eyebrow}>Singapore Botanic Gardens</p>
    <h1 style={slideText.title}>A Living Heritage Garden</h1>
    <p style={slideText.subtitle}>
      Nature, science, culture, and public life growing together in the heart of Singapore.
    </p>
    {!photo && <p style={styles.uploadHint}>Add `slide-0.jpg` to `client/src/assets/photos` for the cover image.</p>}
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Singapore Botanic Gardens</p>
    <h1 style={slideText.title}>A Living Heritage Garden</h1>
    <p style={slideText.subtitle}>
      Nature, science, culture, and public life growing together in the heart of Singapore.
    </p>
  </SlideShell>
);

const styles = {
  uploadHint: {
    color: colors.accent,
    fontSize: "0.95rem",
    margin: `${spacing.lg} 0 0 0`,
  },
};
