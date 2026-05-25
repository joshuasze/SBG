import { colors, fonts, spacing, radii } from "../styles/tokens.js";

export default function PollDashboard({ votes = {}, poll }) {
  if (!poll) return null;

  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);
  const maxVotes = Math.max(1, ...poll.options.map((option) => votes[option] || 0));

  return (
    <aside style={styles.panel} aria-label="Live poll dashboard">
      <div style={styles.header}>
        <p style={styles.eyebrow}>Live Poll Dashboard</p>
        <p style={styles.total}>{totalVotes} response{totalVotes === 1 ? "" : "s"}</p>
      </div>

      <h2 style={styles.question}>{poll.question}</h2>

      <div style={styles.results}>
        {poll.options.map((option) => {
          const count = votes[option] || 0;
          const percent = totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);
          const barWidth = count === 0 ? "0%" : `${(count / maxVotes) * 100}%`;

          return (
            <div key={option} style={styles.resultRow}>
              <div style={styles.resultMeta}>
                <span style={styles.option}>{option}</span>
                <span style={styles.count}>{count} · {percent}%</span>
              </div>
              <div style={styles.track}>
                <div style={{ ...styles.bar, width: barWidth }} />
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

const styles = {
  panel: {
    position: "fixed",
    top: spacing.sm,
    right: spacing.sm,
    zIndex: 20,
    width: "min(420px, calc(100vw - 2rem))",
    maxHeight: "calc(100svh - 8rem)",
    overflowY: "auto",
    boxSizing: "border-box",
    background: "rgba(11, 23, 18, 0.94)",
    border: `1px solid ${colors.border}`,
    borderRadius: radii.lg,
    boxShadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
    backdropFilter: "blur(16px)",
    padding: "clamp(1rem, 2.2vw, 1.5rem)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  eyebrow: {
    margin: 0,
    color: colors.accent,
    fontSize: "0.75rem",
    fontWeight: fonts.weightBold,
    textTransform: "uppercase",
  },
  total: {
    margin: 0,
    color: colors.textSecondary,
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
  },
  question: {
    margin: `0 0 ${spacing.md} 0`,
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.25rem, 2.3vw, 1.8rem)",
    lineHeight: 1.1,
  },
  results: {
    display: "grid",
    gap: spacing.sm,
  },
  resultRow: {
    display: "grid",
    gap: spacing.xs,
  },
  resultMeta: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: spacing.sm,
  },
  option: {
    color: colors.textPrimary,
    fontSize: "0.95rem",
    fontWeight: fonts.weightMedium,
  },
  count: {
    color: colors.textSecondary,
    fontSize: "0.9rem",
    whiteSpace: "nowrap",
  },
  track: {
    height: "10px",
    overflow: "hidden",
    borderRadius: radii.sm,
    background: colors.bgSubtle,
  },
  bar: {
    height: "100%",
    borderRadius: radii.sm,
    background: colors.accent,
    transition: "width 180ms ease",
  },
};
