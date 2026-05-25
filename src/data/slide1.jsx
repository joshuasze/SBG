import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const items = [
  ["01", "Intro", "Set the context and framing of the Singapore Botanic Gardens."],
  ["02", "Key Features", "Highlight the major characteristics and identity of the Gardens."],
  ["03", "Contribution to Smart City", "Show how the Gardens supports Singapore's Smart Nation vision."],
  ["04", "Comparison", "Compare the Gardens with other city green spaces and benchmarks."],
  ["05", "Features Missing Out - Recommendations", "Identify gaps and propose practical next-step improvements."],
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
  >
    <p style={slideText.eyebrow}>Today&apos;s Route</p>
    <h1 style={slideText.heading}>What We Will Explore</h1>
    <AgendaList />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Today&apos;s Route</p>
    <h1 style={slideText.heading}>What We Will Explore</h1>
    <AgendaList />
  </SlideShell>
);

function AgendaList() {
  return (
    <div style={styles.list}>
      {items.map(([number, title, body]) => (
        <article key={title} style={styles.item}>
          <span style={slideUi.marker}>{number}</span>
          <div>
            <h2 style={styles.itemTitle}>{title}</h2>
            <p style={styles.itemBody}>{body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const styles = {
  list: {
    display: "grid",
    gap: "clamp(0.45rem, 1vw, 0.8rem)",
    maxWidth: "980px",
    width: "100%",
  },
  item: {
    ...slideUi.card,
    alignItems: "flex-start",
    boxSizing: "border-box",
    display: "grid",
    gap: "clamp(0.45rem, 1.1vw, 0.9rem)",
    gridTemplateColumns: "auto 1fr",
    padding: "clamp(0.55rem, 1.2vw, 0.95rem)",
  },
  itemTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.02rem, 1.9vw, 1.4rem)",
    lineHeight: 1.05,
    margin: `0 0 clamp(0.12rem, 0.4vw, ${spacing.xs}) 0`,
  },
  itemBody: {
    color: colors.textSecondary,
    fontSize: "clamp(0.78rem, 1.2vw, 0.92rem)",
    lineHeight: 1.35,
    margin: 0,
  },
};
