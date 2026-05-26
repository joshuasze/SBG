import SlideShell from "./SlideShell.jsx";
import { slideText } from "./slideTheme.js";

function ThankYouContent() {
  return (
    <>
      <h1 style={slideText.title}>Thank you very much for your time!</h1>
      <p style={slideText.subtitle}>Don&apos;t forget to &quot;leaf&quot; us a like!!</p>
    </>
  );
}

export const PresenterSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <ThankYouContent />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <ThankYouContent />
  </SlideShell>
);
