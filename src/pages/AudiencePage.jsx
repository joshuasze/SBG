import slides from "../data/index.js";
import PollCard from "../components/pollcard.jsx";
import { colors, fonts, spacing } from "../styles/tokens.js";

export default function AudiencePage({ socket, presentationState }) {
  const { currentSlide, pollOpen } = presentationState;
  const current = slides[currentSlide] ?? slides[0];
  const SlideComponent = current.audienceView;

  return (
    <div style={styles.wrapper}>
      {/* Slide area */}
      <div style={styles.slideArea}>
        <SlideComponent photo={current.photo} />
      </div>

      {/* Poll appears at the bottom when active */}
      {pollOpen && (
        <div style={styles.pollArea}>
          <PollCard socket={socket} />
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background: colors.bgDark,
    color: colors.textPrimary,
    fontFamily: fonts.family,
  },
  slideArea: {
    flex: 1,
    overflow: "hidden",
  },
  pollArea: {
    padding: spacing.sm,
    background: "rgba(11, 23, 18, 0.96)",
    borderTop: `1px solid ${colors.border}`,
  },
};
