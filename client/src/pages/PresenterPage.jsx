import { useEffect, useState } from "react";
import { socket } from "../lib/socket";
import { slides } from "../data/index.js";
import { EVENTS } from "../../../shared/events.js";

export default function PresenterPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pollOpen, setPollOpen] = useState(false);
  const [votes, setVotes] = useState({});
  const [showPollPanel, setShowPollPanel] = useState(false);

  useEffect(() => {
    socket.emit(EVENTS.JOIN_AS_PRESENTER);
    socket.on(EVENTS.POLL_RESULTS, (newVotes) => setVotes(newVotes));
    return () => { socket.off(EVENTS.POLL_RESULTS); };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setPollOpen(false);
    setVotes({});
    setShowPollPanel(false);
    socket.emit(EVENTS.SLIDE_CHANGE, index);
  };

  const openPoll = () => {
    const poll = slides[currentSlide].poll;
    if (!poll) return;
    setPollOpen(true);
    setVotes({});
    socket.emit(EVENTS.POLL_OPEN, poll);
  };

  const closePoll = () => {
    setPollOpen(false);
    setVotes({});
    socket.emit(EVENTS.POLL_CLOSE);
  };

  const slide = slides[currentSlide];

  return (
    <div style={styles.page}>

      {/* ── Main slide area ── */}
      <div style={styles.slideArea}>
        <h2 style={styles.slideTitle}>{slide.title}</h2>
        <p style={styles.slideContent}>{slide.content}</p>
      </div>

      {/* ── Poll results panel (floats above bottom bar) ── */}
      {showPollPanel && slide.poll && (
        <div style={styles.pollPanel}>
          <p style={styles.pollQuestion}>{slide.poll.question}</p>
          {!pollOpen ? (
            <button style={styles.pillBtn} onClick={openPoll}>Open Poll</button>
          ) : (
            <>
              {slide.poll.options.map((opt, i) => (
                <div key={i} style={styles.voteRow}>
                  <span style={styles.voteLabel}>{opt}</span>
                  <span style={styles.voteCount}>{votes[i] ?? 0}</span>
                </div>
              ))}
              <button style={styles.pillBtnRed} onClick={closePoll}>Close Poll</button>
            </>
          )}
        </div>
      )}

      {/* ── Bottom control bar ── */}
      <div style={styles.bar}>

        {/* Slide counter */}
        <span style={styles.counter}>
          {currentSlide + 1} / {slides.length}
        </span>

        {/* Navigation */}
        <div style={styles.navGroup}>
          <button
            style={styles.navBtn}
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
          >
            ←
          </button>
          <button
            style={styles.navBtn}
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === slides.length - 1}
          >
            →
          </button>
        </div>

        {/* Poll toggle — only shows if this slide has a poll */}
        {slide.poll && (
          <button
            style={{
              ...styles.pollToggle,
              background: showPollPanel ? "#01696f" : "transparent",
              color: showPollPanel ? "white" : "#666",
            }}
            onClick={() => setShowPollPanel((v) => !v)}
          >
            📊 Poll
          </button>
        )}

      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontFamily: "sans-serif",
    background: "#0f1117",
    color: "white",
    overflow: "hidden",
  },
  slideArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem",
    textAlign: "center",
  },
  slideTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    margin: "0 0 1.5rem 0",
  },
  slideContent: {
    fontSize: "1.4rem",
    color: "#aaa",
    maxWidth: "700px",
    lineHeight: 1.6,
  },
  bar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "0.75rem 2rem",
    background: "rgba(255,255,255,0.05)",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  counter: {
    fontSize: "0.85rem",
    color: "#666",
    minWidth: "50px",
    textAlign: "center",
  },
  navGroup: {
    display: "flex",
    gap: "0.5rem",
  },
  navBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "white",
    borderRadius: "8px",
    padding: "0.4rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
  pollToggle: {
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "8px",
    padding: "0.4rem 1rem",
    fontSize: "0.85rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  pollPanel: {
    position: "absolute",
    bottom: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#1c1b19",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    minWidth: "320px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },
  pollQuestion: {
    margin: "0 0 1rem 0",
    fontSize: "0.95rem",
    color: "#ccc",
  },
  voteRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.4rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    fontSize: "0.9rem",
  },
  voteLabel: { color: "#bbb" },
  voteCount: { color: "white", fontWeight: "700" },
  pillBtn: {
    marginTop: "1rem",
    padding: "0.5rem 1.25rem",
    background: "#01696f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  pillBtnRed: {
    marginTop: "1rem",
    padding: "0.5rem 1.25rem",
    background: "#a12c7b",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};