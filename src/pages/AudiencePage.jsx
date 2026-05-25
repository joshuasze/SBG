import slides from "../data/index.js";
import { isPollEnabledForSlide } from "../data/pollConfig.js";
import PollCard from "../components/pollcard.jsx";
import { colors, fonts, spacing } from "../styles/tokens.js";

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

      {/* Poll appears at the bottom when active */}
      {canShowPoll && pollOpen && (
        <div style={styles.pollArea}>
          <PollCard socket={socket} />
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
  // Poll sits at the bottom but doesn't trap content above it: it simply caps
  // its own height and scrolls internally if the question + buttons get tall.
  pollArea: {
    padding: spacing.sm,
    paddingBottom: `calc(${spacing.sm} + env(safe-area-inset-bottom, 0px))`,
    background: "rgba(11, 23, 18, 0.96)",
    borderTop: `1px solid ${colors.border}`,
    maxHeight: "45vh",
    overflowY: "auto",
    boxSizing: "border-box",
  },
};
