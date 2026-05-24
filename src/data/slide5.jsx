import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

// Smart City pillars — the first one is the major focus and renders largest.
const pillars = [
  {
    title: "Smart Environmental",
    body: "Biodiversity, climate resilience, and living research at the heart of the city.",
    major: true,
  },
  {
    title: "Smart Living",
    body: "A restorative public space woven into daily life and wellbeing.",
  },
  {
    title: "Smart People",
    body: "Education, citizen science, and lifelong learning under the canopy.",
  },
  {
    title: "Smart Governance",
    body: "A UNESCO-grade landscape stewarded across agencies and generations.",
  },
  {
    title: "Smart Economy",
    body: "Tourism, horticultural science, and the green innovation ecosystem.",
  },
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell
    photo={photo}
    align="left"
    note="Anchor on Smart Environmental as the Gardens' core contribution, then orbit out through the other four pillars."
  >
    <p style={slideText.eyebrow}>Singapore as a Smart City</p>
    <h1 style={slideText.heading}>The Gardens&apos; Five Pillars</h1>
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
  );
}

const styles = {
  cluster: {
    alignItems: "stretch",
    display: "grid",
    gap: "clamp(0.75rem, 2vw, 1.5rem)",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(170px, 100%), 1fr))",
    maxWidth: "1080px",
    width: "100%",
  },
  bubble: {
    ...slideUi.card,
    alignItems: "center",
    borderRadius: "50%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "clamp(0.75rem, 2vw, 1.5rem)",
    textAlign: "center",
    width: "100%",
    aspectRatio: "1 / 1",
  },
  bubbleMajor: {
    background: colors.accentSoft,
    border: `2px solid ${colors.accent}`,
    boxShadow: "0 32px 80px rgba(0, 0, 0, 0.34)",
    minHeight: "clamp(200px, 32vw, 320px)",
  },
  bubbleMinor: {
    minHeight: "clamp(140px, 20vw, 200px)",
  },
  bubbleTitle: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
    lineHeight: 1.05,
    margin: `0 0 ${spacing.xs} 0`,
  },
  bubbleTitleMajor: {
    color: colors.accent,
    fontSize: "clamp(1.4rem, 2.6vw, 2rem)",
    margin: `0 0 ${spacing.sm} 0`,
  },
  bubbleBody: {
    color: colors.textSecondary,
    fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
    lineHeight: 1.4,
    margin: 0,
    maxWidth: "160px",
  },
  bubbleBodyMajor: {
    fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
    lineHeight: fonts.lineHeight,
    maxWidth: "240px",
  },
};
