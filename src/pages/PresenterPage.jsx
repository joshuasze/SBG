import slides from "../data/index.js";
import { isPollEnabledForSlide } from "../data/pollConfig.js";
import PollDashboard from "../components/PollDashboard.jsx";
import { colors, fonts, spacing, radii } from "../styles/tokens.js";

export default function PresenterPage({ socket, presentationState, presenterPassword }) {
  const { currentSlide, pollOpen, pollVotes } = presentationState;

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
  const pollAllowedOnSlide = isPollEnabledForSlide(currentSlide);
  const showPoll = pollAllowedOnSlide && pollOpen;

  return (
    <div style={styles.wrapper}>
      {/* Slide preview area */}
      <div style={styles.slideArea}>
        <SlideComponent photo={current.photo} />
      </div>

      {showPoll && <PollDashboard votes={pollVotes} />}

      {/* Control bar at the bottom */}
      <div style={styles.controlBar}>
        <button style={styles.btn} onClick={prevSlide}>Prev</button>

        <span style={styles.counter}>
          Slide {currentSlide + 1} of {slides.length}
        </span>

        <button style={styles.btn} onClick={nextSlide}>Next</button>

        {pollAllowedOnSlide && (
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
        )}

      </div>
    </div>
  );
}

const styles = {
  // Keep the presenter page pinned to the viewport height.
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100svh",
    background: colors.bgDark,
    color: colors.textPrimary,
    fontFamily: fonts.family,
    overflow: "hidden",
  },
  // Scrollable slide region with bottom padding so fixed controls never cover content.
  slideArea: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    paddingBottom: "clamp(5.5rem, 13vh, 8rem)",
    boxSizing: "border-box",
  },
  controlBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: spacing.sm,
    padding: spacing.sm,
    paddingLeft: `calc(${spacing.sm} + env(safe-area-inset-left, 0px))`,
    paddingRight: `calc(${spacing.sm} + env(safe-area-inset-right, 0px))`,
    paddingBottom: `calc(${spacing.sm} + env(safe-area-inset-bottom, 0px))`,
    background: "rgba(11, 23, 18, 0.96)",
    borderTop: `1px solid ${colors.border}`,
    boxSizing: "border-box",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 30,
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
