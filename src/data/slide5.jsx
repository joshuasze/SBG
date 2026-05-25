import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

// Smart City pillars — the first one is the major focus and renders largest.
const pillars = [
  {
    title: "Smart Environmental",
    body: "Biodiversity, climate resilience, and living research.",
    major: true,
  },
  {
    title: "Smart Living",
    body: "Daily wellbeing through restorative public space.",
  },
  {
    title: "Smart People",
    body: "Education, outreach, and lifelong learning.",
  },
  {
    title: "Smart Governance",
    body: "Long-term stewardship, planning, and zoning.",
  },
  {
    title: "Smart Economy",
    body: "Tourism, talent, and green-sector innovation.",
  },
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Anchor on Smart Environmental as the Gardens' core contribution, then orbit out through the other four pillars."
  >
    <p style={slideText.eyebrow}>Singapore as a Smart City</p>
    <h1 style={styles.heading}>The Gardens&apos; Five Pillars</h1>
    <PillarBubbles />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Singapore as a Smart City</p>
    <h1 style={slideText.heading}>The Gardens&apos; Five Pillars</h1>
    <PillarBubbles />
  </SlideShell>
);

function PillarBubbles() {
  return (
    <div style={styles.clusterWrap}>
      <div style={styles.cluster}>
      {pillars.map(({ title, body, major }) => (
        <article
          key={title}
          style={{
            ...styles.bubble,
            ...(major ? styles.bubbleMajor : styles.bubbleMinor),
          }}
        >
          <h2
            style={{
              ...styles.bubbleTitle,
              ...(major ? styles.bubbleTitleMajor : null),
            }}
          >
            {title}
          </h2>
          <p
            style={{
              ...styles.bubbleBody,
              ...(major ? styles.bubbleBodyMajor : null),
            }}
          >
            {body}
          </p>
        </article>
      ))}
      </div>
    </div>
  );
}

const styles = {
  heading: {
    ...slideText.heading,
    fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
    marginBottom: "clamp(0.6rem, 1.4vw, 1rem)",
  },
  clusterWrap: {
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
    paddingBottom: "0.25rem",
  },
  cluster: {
    alignItems: "center",
    display: "flex",
    gap: "clamp(0.7rem, 1.5vw, 1rem)",
    minWidth: "max-content",
    width: "max-content",
  },
  bubble: {
    ...slideUi.card,
    alignItems: "center",
    borderRadius: "50%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "clamp(0.65rem, 1.6vw, 1rem)",
    textAlign: "center",
    aspectRatio: "1 / 1",
    flex: "0 0 auto",
    overflow: "hidden",
  },
  bubbleMajor: {
    background: colors.accentSoft,
    border: `2px solid ${colors.accent}`,
    boxShadow: "0 32px 80px rgba(0, 0, 0, 0.34)",
    width: "clamp(180px, 19vw, 270px)",
  },
  bubbleMinor: {
    width: "clamp(145px, 15vw, 205px)",
  },
  bubbleTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)",
    lineHeight: 1.02,
    margin: `0 0 ${spacing.xs} 0`,
    overflowWrap: "anywhere",
  },
  bubbleTitleMajor: {
    color: colors.accent,
    fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
    margin: `0 0 ${spacing.xs} 0`,
  },
  bubbleBody: {
    color: colors.textSecondary,
    fontSize: "clamp(0.68rem, 0.9vw, 0.8rem)",
    lineHeight: 1.25,
    margin: 0,
    maxWidth: "90%",
    overflowWrap: "anywhere",
  },
  bubbleBodyMajor: {
    fontSize: "clamp(0.74rem, 1vw, 0.9rem)",
    lineHeight: 1.3,
    maxWidth: "88%",
  },
};
