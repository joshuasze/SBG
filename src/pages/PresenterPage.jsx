import slides from "../data/index.js";
import { colors, fonts, spacing, radii } from "../styles/tokens.js";

export default function PresenterPage({ socket, presentationState, presenterPassword }) {
  const { currentSlide, pollOpen } = presentationState;

  // Tell the server to change the slide for everyone
  function goToSlide(index) {
    socket.emit("slide_changed", { slideIndex: index, presenterPassword });
  }

  // Tell the server to open/close the poll
  function togglePoll() {
    const next = !pollOpen;
    socket.emit("poll_toggled", { open: next, presenterPassword });
  }

  function prevSlide() {
    if (currentSlide > 0) goToSlide(currentSlide - 1);
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1);
  }

  const current = slides[currentSlide] ?? slides[0];
  const SlideComponent = current.presenterView;

  return (
    <div style={styles.wrapper}>
      {/* Slide preview area */}
      <div style={styles.slideArea}>
        <SlideComponent photo={current.photo} />
      </div>

      {/* Control bar at the bottom */}
      <div style={styles.controlBar}>
        <button style={styles.btn} onClick={prevSlide}>← Prev</button>

        <span style={styles.counter}>
          Slide {currentSlide + 1} of {slides.length}
        </span>

        <button style={styles.btn} onClick={nextSlide}>Next →</button>

        <button
          style={{
            ...styles.btn,
            background: pollOpen ? colors.danger : colors.accent,
            color: pollOpen ? colors.textPrimary : colors.bgDark,
            marginLeft: spacing.lg,
          }}
          onClick={togglePoll}
        >
          {pollOpen ? "Close Poll" : "Open Poll"}
        </button>

      </div>
    </div>
  );
}

const styles = {
  // Min-height + svh so the page always covers the viewport but can grow when
  // the slide content is taller than the screen (mobile / portrait laptops).
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100svh",
    background: colors.bgDark,
    color: colors.textPrimary,
    fontFamily: fonts.family,
  },
  // Scrollable slide region — anything covered by the control bar can be
  // reached by scrolling, so the bar never traps content.
  slideArea: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
  },
  controlBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: spacing.sm,
    padding: spacing.sm,
    paddingBottom: `calc(${spacing.sm} + env(safe-area-inset-bottom, 0px))`,
    background: "rgba(11, 23, 18, 0.96)",
    borderTop: `1px solid ${colors.border}`,
    boxSizing: "border-box",
  },
  btn: {
    padding: `${spacing.xs} ${spacing.sm}`,
    background: colors.accent,
    color: colors.bgDark,
    border: "none",
    borderRadius: radii.md,
    fontSize: "clamp(0.85rem, 2.4vw, 1rem)",
    cursor: "pointer",
    fontWeight: fonts.weightBold,
  },
  counter: {
    fontSize: "clamp(0.85rem, 2.4vw, 1rem)",
    color: colors.textSecondary,
    minWidth: "120px",
    textAlign: "center",
  },
};
