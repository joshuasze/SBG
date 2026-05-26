import { useState } from "react";
import { colors, fonts, spacing, radii } from "../styles/tokens.js";

export default function PollCard({ socket, poll }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (!poll) return null;

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
      {poll.image && (
        <img
          src={poll.image}
          alt={poll.imageAlt ?? "Image for the poll question"}
          style={styles.pollImage}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      )}
      <p style={styles.question}>{poll.question}</p>
      <div style={styles.options}>
        {poll.options.map((option) => (
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
    padding: "clamp(0.85rem, 3vw, 1.5rem)",
    background: colors.bgPanel,
    borderRadius: radii.lg,
    border: `1px solid ${colors.border}`,
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.24)",
    backdropFilter: "blur(14px)",
    boxSizing: "border-box",
    width: "100%",
  },
  question: {
    fontFamily: fonts.display,
    fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
    fontWeight: fonts.weightBold,
    color: colors.textPrimary,
    margin: 0,
    textAlign: "center",
  },
  pollImage: {
    width: "100%",
    maxHeight: "min(34vh, 300px)",
    objectFit: "cover",
    borderRadius: radii.md,
    border: `1px solid ${colors.border}`,
    boxSizing: "border-box",
  },
  options: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))",
    gap: spacing.xs,
  },
  optionBtn: {
    padding: `${spacing.sm} ${spacing.md}`,
    background: colors.accent,
    color: colors.bgDark,
    border: "none",
    borderRadius: radii.md,
    fontSize: "clamp(0.9rem, 2.4vw, 1rem)",
    cursor: "pointer",
    fontWeight: fonts.weightBold,
    width: "100%",
  },
  thanks: {
    fontSize: "clamp(1rem, 2.4vw, 1.25rem)",
    color: colors.textPrimary,
    margin: 0,
  },
  selected: {
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
    color: colors.textSecondary,
    margin: 0,
  },
};
