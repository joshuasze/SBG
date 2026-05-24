import { useEffect, useState } from "react";
import { socket } from "../lib/socket.js";
import { slides } from "../data/slides.js";
import { EVENTS } from "../../../shared/events.js";

export default function PresenterPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pollOpen, setPollOpen] = useState(false);
  const [votes, setVotes] = useState({});

  // Tell the server we are the presenter when this page loads
  useEffect(() => {
    socket.emit(EVENTS.JOIN_AS_PRESENTER);

    // Listen for live vote updates from the server
    socket.on(EVENTS.POLL_RESULTS, (newVotes) => {
      setVotes(newVotes);
    });

    return () => {
      socket.off(EVENTS.POLL_RESULTS);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setPollOpen(false);
    setVotes({});
    socket.emit(EVENTS.SLIDE_CHANGE, index);  // tell server to update audience
  };

  const openPoll = () => {
    const poll = slides[currentSlide].poll;
    if (!poll) return;
    setPollOpen(true);
    setVotes({});
    socket.emit(EVENTS.POLL_OPEN, poll);  // tell server to show poll to audience
  };

  const closePoll = () => {
    setPollOpen(false);
    setVotes({});
    socket.emit(EVENTS.POLL_CLOSE);
  };

  const slide = slides[currentSlide];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>🎤 Presenter View</h1>
        <span style={styles.slideCounter}>
          Slide {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Current slide preview */}
      <div style={styles.slidePreview}>
        <h2 style={styles.slideTitle}>{slide.title}</h2>
        <p style={styles.slideContent}>{slide.content}</p>
      </div>

      {/* Previous / Next buttons */}
      <div style={styles.controls}>
        <button
          style={styles.btn}
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
        >
          ← Previous
        </button>
        <button
          style={styles.btn}
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
        >
          Next →
        </button>
      </div>

      {/* Poll section — only appears if this slide has a poll */}
      {slide.poll && (
        <div style={styles.pollBox}>
          <h3>📊 Poll: {slide.poll.question}</h3>
          {!pollOpen ? (
            <button style={styles.btnGreen} onClick={openPoll}>
              Open Poll for Audience
            </button>
          ) : (
            <>
              <div style={styles.voteResults}>
                {slide.poll.options.map((opt, i) => (
                  <div key={i} style={styles.voteRow}>
                    <span>{opt}</span>
                    <strong>{votes[i] ?? 0} votes</strong>
                  </div>
                ))}
              </div>
              <button style={styles.btnRed} onClick={closePoll}>
                Close Poll
              </button>
            </>
          )}
        </div>
      )}

      {/* Slide list at the bottom for quick navigation */}
      <div style={styles.thumbnailRow}>
        {slides.map((s, i) => (
          <div
            key={i}
            style={{
              ...styles.thumbnail,
              background: i === currentSlide ? "#01696f" : "#eee",
              color: i === currentSlide ? "white" : "#333",
            }}
            onClick={() => goToSlide(i)}
          >
            {i + 1}. {s.title}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { fontFamily: "sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" },
  headerTitle: { margin: 0 },
  slideCounter: { fontSize: "1rem", color: "#666" },
  slidePreview: { background: "#f9f8f5", border: "1px solid #ddd", borderRadius: "12px", padding: "2rem", marginBottom: "1.5rem", minHeight: "150px" },
  slideTitle: { margin: "0 0 1rem 0", fontSize: "1.8rem" },
  slideContent: { margin: 0, fontSize: "1.1rem", color: "#444" },
  controls: { display: "flex", gap: "1rem", marginBottom: "1.5rem" },
  btn: { padding: "0.75rem 1.5rem", fontSize: "1rem", borderRadius: "8px", border: "1px solid #ccc", background: "white", cursor: "pointer" },
  btnGreen: { padding: "0.75rem 1.5rem", fontSize: "1rem", borderRadius: "8px", border: "none", background: "#01696f", color: "white", cursor: "pointer" },
  btnRed: { padding: "0.75rem 1.5rem", fontSize: "1rem", borderRadius: "8px", border: "none", background: "#a12c7b", color: "white", cursor: "pointer", marginTop: "1rem" },
  pollBox: { background: "#f0f9f9", border: "1px solid #c8e0de", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.5rem" },
  voteResults: { display: "flex", flexDirection: "column", gap: "0.5rem", margin: "1rem 0" },
  voteRow: { display: "flex", justifyContent: "space-between", padding: "0.5rem 1rem", background: "white", borderRadius: "8px", border: "1px solid #ddd" },
  thumbnailRow: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  thumbnail: { padding: "0.75rem 1rem", borderRadius: "8px", cursor: "pointer", fontSize: "0.9rem" },
};