import { useState } from "react";
import { colors, fonts, spacing, radii } from "../styles/tokens.js";

// Hardcoded poll question and options — edit these to match your presentation
const POLL = {
  question: "How familiar are you with this topic?",
  options: [
    "Complete beginner",
    "I know the basics",
    "Fairly experienced",
    "I'm an expert",
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
        <p style={styles.thanks}>✅ Thanks for your response!</p>
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
    background: colors.bgSubtle,
    borderRadius: radii.lg,
    border: `1px solid ${colors.border}`,
  },
  question: {
    fontSize: fonts.sizeLg,
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
    color: colors.textPrimary,
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
