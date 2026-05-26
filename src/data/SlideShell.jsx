import { colors, fonts } from "../styles/tokens.js";

export default function SlideShell({ photo, align = "center", overlayStyle, children }) {
  return (
    <div style={styles.page}>
      {photo ? (
        <img
          src={photo}
          alt=""
          style={styles.photo}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      ) : (
        <div style={styles.fallback} />
      )}
      <div style={{ ...styles.overlay, ...overlayStyle }} />
      <div
        style={{
          ...styles.content,
          alignItems: align === "left" ? "flex-start" : "center",
          textAlign: align,
        }}
      >
        {children}
      </div>
    </div>
  );
}

const styles = {
  // The page now uses min-height instead of a hard height so that when the
  // slide content is taller than the viewport (typical on mobile) the page
  // can grow and the parent scroll container takes over.
  page: {
    background: colors.bgDark,
    color: colors.textPrimary,
    fontFamily: fonts.family,
    minHeight: "100svh",
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },
  photo: {
    height: "100%",
    inset: 0,
    objectFit: "cover",
    position: "absolute",
    width: "100%",
  },
  fallback: {
    background:
      "radial-gradient(circle at 78% 18%, rgba(79, 122, 89, 0.58), transparent 30%), radial-gradient(circle at 18% 80%, rgba(215, 168, 79, 0.18), transparent 32%), linear-gradient(135deg, #0b1712 0%, #12281c 50%, #07110d 100%)",
    height: "100%",
    inset: 0,
    position: "absolute",
    width: "100%",
  },
  overlay: {
    background:
      "linear-gradient(90deg, rgba(11, 23, 18, 0.96) 0%, rgba(11, 23, 18, 0.74) 50%, rgba(11, 23, 18, 0.34) 100%)",
    inset: 0,
    position: "absolute",
  },
  // Padding scales fluidly with viewport so content never touches the edges
  // on small screens but still gets generous breathing room on desktop.
  content: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    justifyContent: "center",
    padding: "clamp(1.5rem, 5vw, 5.5rem)",
    paddingBottom: "clamp(1.75rem, 5vw, 5.5rem)",
    position: "relative",
    width: "100%",
    zIndex: 1,
  },
};
