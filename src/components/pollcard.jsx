import { useState } from "react";
import { colors, fonts, spacing, radii } from "../styles/tokens.js";

// Hardcoded poll question and options — edit these to match your presentation
const POLL = {
  question: "Which part of the Gardens would you most want to explore?",
  options: [
    "National Orchid Garden",
    "Rain Forest trail",
    "Heritage trees",
    "Lakes and lawns",
  ],
};

export default function PollCard({ socket }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function submitVote(option) {
    if (submitted) return;
    setSelected(option);
    setSubmitted(true);
    socket.emit("poll_vote", { answer: option });
  }

  // After voting — show a thank you message
  if (submitted) {
    return (
      <div style={styles.card}>
        <p style={styles.thanks}>Thanks for your response.</p>
        <p style={styles.selected}>You answered: <strong>{selected}</strong></p>
      </div>
    );
  }

  // Before voting — show the question and buttons
  return (
    <div style={styles.card}>
      <p style={styles.question}>{POLL.question}</p>
      <div style={styles.options}>
        {POLL.options.map((option) => (
          <button
            key={option}
            style={styles.optionBtn}
            onClick={() => submitVote(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.sm,
    padding: spacing.md,
    background: colors.bgPanel,
    borderRadius: radii.lg,
    border: `1px solid ${colors.border}`,
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.24)",
    backdropFilter: "blur(14px)",
  },
  question: {
    fontFamily: fonts.display,
    fontSize: "1.8rem",
    fontWeight: fonts.weightBold,
    color: colors.textPrimary,
    margin: 0,
  },
  options: {
    display: "flex",
    flexWrap: "wrap",
    gap: spacing.xs,
  },
  optionBtn: {
    padding: `${spacing.xs} ${spacing.sm}`,
    background: colors.accent,
    color: colors.bgDark,
    border: "none",
    borderRadius: radii.md,
    fontSize: fonts.sizeBase,
    cursor: "pointer",
    fontWeight: fonts.weightBold,
  },
  thanks: {
    fontSize: fonts.sizeLg,
    color: colors.textPrimary,
    margin: 0,
  },
  selected: {
    fontSize: fonts.sizeBase,
    color: colors.textSecondary,
    margin: 0,
  },
};
