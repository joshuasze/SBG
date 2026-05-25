import slides from "../data/index.js";
import { isPollEnabledForSlide } from "../data/pollConfig.js";
import PollCard from "../components/pollcard.jsx";
import { colors, fonts } from "../styles/tokens.js";

export default function AudiencePage({ socket, presentationState }) {
  const { currentSlide, pollOpen } = presentationState;
  const current = slides[currentSlide] ?? slides[0];
  const SlideComponent = current.audienceView;
  const canShowPoll = isPollEnabledForSlide(currentSlide);

  return (
    <div style={styles.wrapper}>
      {/* Slide area */}
      <div style={styles.slideArea}>
        <SlideComponent photo={current.photo} />
      </div>

      {/* Poll appears as a centered popup when active */}
      {canShowPoll && pollOpen && (
        <div style={styles.pollOverlay}>
          <div style={styles.pollDialog}>
            <PollCard socket={socket} />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  // Use min-height + svh so mobile browser chrome (URL bar) doesn't crop the
  // page, and let the slide area grow + scroll instead of clipping content.
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100svh",
    background: colors.bgDark,
    color: colors.textPrimary,
    fontFamily: fonts.family,
  },
  // Scrollable slide region — the audience can scroll past whatever the poll
  // card might be covering at the bottom.
  slideArea: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
  },
  pollOverlay: {
    position: "fixed",
    inset: 0,
    zIndex: 40,
    display: "grid",
    placeItems: "center",
    padding: "clamp(0.75rem, 2.5vw, 1.25rem)",
    paddingTop: `calc(clamp(0.75rem, 2.5vw, 1.25rem) + env(safe-area-inset-top, 0px))`,
    paddingRight: `calc(clamp(0.75rem, 2.5vw, 1.25rem) + env(safe-area-inset-right, 0px))`,
    paddingBottom: `calc(clamp(0.75rem, 2.5vw, 1.25rem) + env(safe-area-inset-bottom, 0px))`,
    paddingLeft: `calc(clamp(0.75rem, 2.5vw, 1.25rem) + env(safe-area-inset-left, 0px))`,
    background: "rgba(4, 10, 7, 0.62)",
    backdropFilter: "blur(4px)",
    boxSizing: "border-box",
  },
  pollDialog: {
    width: "min(760px, 100%)",
    maxHeight: "min(84svh, 680px)",
    overflowY: "auto",
    boxSizing: "border-box",
  },
};
