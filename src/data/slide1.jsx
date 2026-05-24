import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const items = [
  ["01", "Heritage", "Why the Gardens matter as a historic green landmark."],
  ["02", "Biodiversity", "Palms, orchids, rainforest pockets, and living collections."],
  ["03", "Experience", "How visitors move, pause, learn, and gather in the landscape."],
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Use this as the roadmap before moving into the interactive poll."
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
    gap: spacing.sm,
    maxWidth: "780px",
    width: "100%",
  },
  item: {
    ...slideUi.card,
    alignItems: "flex-start",
    boxSizing: "border-box",
    display: "grid",
    gap: spacing.md,
    gridTemplateColumns: "auto 1fr",
    padding: "clamp(0.85rem, 2.4vw, 1.5rem)",
  },
  itemTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.25rem, 3vw, 1.8rem)",
    lineHeight: 1,
    margin: `0 0 ${spacing.xs} 0`,
  },
  itemBody: {
    color: colors.textSecondary,
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    lineHeight: fonts.lineHeight,
    margin: 0,
  },
};
