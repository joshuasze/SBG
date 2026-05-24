import { useEffect, useState } from "react";
import { socket } from "../lib/socket";
import { slides } from "../data/index.js";
import { EVENTS } from "../../../shared/events.js";

export default function AudiencePage() {
  const [state, setState] = useState({ currentSlide: 0, poll: null, votes: {} });
  const [hasVoted, setHasVoted] = useState(false);

  // Tell the server we are an audience member when this page loads
  useEffect(() => {
    socket.emit(EVENTS.JOIN_AS_AUDIENCE);

    // Any time the presenter does something, the server sends a full state update
    socket.on("state:sync", (newState) => {
      setState(newState);
      if (!newState.poll) setHasVoted(false);  // reset vote if poll was closed
    });

    // Live vote results coming in as people vote
    socket.on(EVENTS.POLL_RESULTS, (newVotes) => {
      setState((prev) => ({ ...prev, votes: newVotes }));
    });

    return () => {
      socket.off("state:sync");
      socket.off(EVENTS.POLL_RESULTS);
    };
  }, []);

  const submitVote = (optionIndex) => {
    if (hasVoted) return;  // prevent voting twice
    socket.emit(EVENTS.POLL_VOTE, optionIndex);
    setHasVoted(true);
  };

  const slide = slides[state.currentSlide];
  const totalVotes = Object.values(state.votes).reduce((a, b) => a + b, 0);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>👥 Audience View</h1>
        <span style={styles.slideCounter}>
          Slide {state.currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Current slide content — updates automatically */}
      <div style={styles.slideCard}>
        <h2 style={styles.slideTitle}>{slide.title}</h2>
        <p style={styles.slideContent}>{slide.content}</p>
      </div>

      {/* Poll section — only appears when presenter opens a poll */}
      {state.poll && (
        <div style={styles.pollBox}>
          <h3 style={styles.pollQuestion}>📊 {state.poll.question}</h3>

          {!hasVoted ? (
            // Before voting — show clickable options
            <div style={styles.optionList}>
              {state.poll.options.map((opt, i) => (
                <button
                  key={i}
                  style={styles.optionBtn}
                  onClick={() => submitVote(i)}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            // After voting — show live results as a bar chart
            <div>
              <p style={styles.votedMsg}>✅ Vote submitted! Live results:</p>
              {state.poll.options.map((opt, i) => {
                const count = state.votes[i] ?? 0;
                const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
                return (
                  <div key={i} style={styles.resultRow}>
                    <span style={styles.resultLabel}>{opt}</span>
                    <div style={styles.barTrack}>
                      <div style={{ ...styles.barFill, width: `${pct}%` }} />
                    </div>
                    <span style={styles.resultPct}>{pct}% ({count})</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Shown when no poll is active */}
      {!state.poll && (
        <div style={styles.waitingBox}>
          <p>⏳ Waiting for the presenter...</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: { fontFamily: "sans-serif", padding: "2rem", maxWidth: "600px", margin: "0 auto" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" },
  headerTitle: { margin: 0 },
  slideCounter: { fontSize: "1rem", color: "#666" },
  slideCard: { background: "#f9f8f5", border: "1px solid #ddd", borderRadius: "12px", padding: "2rem", marginBottom: "1.5rem", minHeight: "150px" },
  slideTitle: { margin: "0 0 1rem 0", fontSize: "1.8rem" },
  slideContent: { margin: 0, fontSize: "1.1rem", color: "#444" },
  pollBox: { background: "#f0f9f9", border: "1px solid #c8e0de", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.5rem" },
  pollQuestion: { margin: "0 0 1.5rem 0" },
  optionList: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  optionBtn: { padding: "1rem", fontSize: "1rem", borderRadius: "8px", border: "1px solid #01696f", background: "white", color: "#01696f", cursor: "pointer", textAlign: "left" },
  votedMsg: { color: "#01696f", marginBottom: "1rem" },
  resultRow: { display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" },
  resultLabel: { width: "160px", fontSize: "0.9rem" },
  barTrack: { flex: 1, background: "#ddd", borderRadius: "99px", height: "12px", overflow: "hidden" },
  barFill: { height: "100%", background: "#01696f", borderRadius: "99px", transition: "width 0.4s ease" },
  resultPct: { width: "80px", fontSize: "0.85rem", color: "#555", textAlign: "right" },
  waitingBox: { textAlign: "center", padding: "2rem", color: "#888", background: "#f9f8f5", borderRadius: "12px", border: "1px dashed #ccc" },
};
