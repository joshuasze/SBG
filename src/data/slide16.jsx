import SlideShell from "./SlideShell.jsx";
import { slideText } from "./slideTheme.js";

export const PresenterSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Recommendations</p>
    <h1 style={slideText.title}>Features Missing Out - Recommendation</h1>
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Recommendations</p>
    <h1 style={slideText.title}>Features Missing Out - Recommendation</h1>
  </SlideShell>
);
