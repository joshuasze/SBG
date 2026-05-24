import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const takeaways = [
  ["Conservation", "A garden can protect species while staying open and welcoming."],
  ["Education", "Living collections turn science into something visitors can see."],
  ["Memory", "Landscape design preserves history through paths, shade, and gathering places."],
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Recap each point with a concrete example from the Gardens."
  >
    <p style={slideText.eyebrow}>Key Takeaways</p>
    <h1 style={slideText.heading}>What the Garden Teaches</h1>
    <TakeawayGrid />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Key Takeaways</p>
    <h1 style={slideText.heading}>What the Garden Teaches</h1>
    <TakeawayGrid />
  </SlideShell>
);

function TakeawayGrid() {
  return (
    <div style={styles.grid}>
      {takeaways.map(([title, body]) => (
        <article key={title} style={styles.card}>
          <div style={styles.line} />
          <h2 style={styles.cardTitle}>{title}</h2>
          <p style={styles.cardBody}>{body}</p>
        </article>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gap: spacing.sm,
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    maxWidth: "1040px",
    width: "100%",
  },
  card: {
    ...slideUi.card,
    minHeight: "190px",
    padding: spacing.md,
  },
  line: {
    background: colors.accent,
    height: "3px",
    marginBottom: spacing.md,
    width: "48px",
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "2rem",
    lineHeight: 1,
    margin: `0 0 ${spacing.sm} 0`,
  },
  cardBody: {
    color: colors.textSecondary,
    fontSize: fonts.sizeBase,
    lineHeight: fonts.lineHeight,
    margin: 0,
  },
};
