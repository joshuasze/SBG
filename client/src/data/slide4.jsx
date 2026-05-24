import { spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText } from "./slideTheme.js";

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Invite final reflections and questions from the audience."
  >
    <p style={slideText.eyebrow}>Thank You</p>
    <h1 style={slideText.title}>Questions Among the Trees?</h1>
    <p style={slideText.subtitle}>
      Singapore Botanic Gardens reminds us that public spaces can be beautiful,
      scientific, historic, and alive all at once.
    </p>
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Thank You</p>
    <h1 style={slideText.title}>Questions Among the Trees?</h1>
    <p style={{ ...slideText.subtitle, marginBottom: spacing.sm }}>
      Singapore Botanic Gardens reminds us that public spaces can be beautiful,
      scientific, historic, and alive all at once.
    </p>
  </SlideShell>
);
