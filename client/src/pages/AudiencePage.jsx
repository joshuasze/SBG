import { useState, useEffect } from "react";
import slides from "../data/slides.js";
import PollCard from "../components/PollCard.jsx";
import { colors, fonts, spacing } from "../styles/tokens.js";

export default function AudiencePage({ socket }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pollOpen, setPollOpen] = useState(false);

  useEffect(() => {
    // Listen for slide changes from the presenter
    socket.on("slide_changed", ({ slideIndex }) => {
      setCurrentSlide(slideIndex);
      setPollOpen(false); // close poll when slide changes
    });

    // Listen for poll open/close from the presenter
    socket.on("poll_toggled", ({ open }) => {
      setPollOpen(open);
    });

    // Clean up listeners when component unmounts
    return () => {
      socket.off("slide_changed");
      socket.off("poll_toggled");
    };
  }, [socket]);

  const SlideComponent = slides[currentSlide].audienceView;

  return (
    <div style={styles.wrapper}>
      {/* Slide area */}
      <div style={styles.slideArea}>
        <SlideComponent />
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
    background: colors.bgCard,
    borderTop: `1px solid ${colors.border}`,
  },
};