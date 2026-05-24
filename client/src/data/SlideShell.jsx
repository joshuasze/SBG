import { colors, fonts, spacing } from "../styles/tokens.js";

export default function SlideShell({ photo, align = "center", children, note }) {
  return (
    <div style={styles.page}>
      {photo ? (
        <img src={photo} alt="" style={styles.photo} />
      ) : (
        <div style={styles.fallback} />
      )}
      <div style={styles.overlay} />
      <div
        style={{
          ...styles.content,
          alignItems: align === "left" ? "flex-start" : "center",
          textAlign: align,
        }}
      >
        {children}
        {note && <p style={styles.note}>Presenter notes: {note}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: colors.bgDark,
    color: colors.textPrimary,
    fontFamily: fonts.family,
    height: "100%",
    minHeight: "100%",
    overflow: "hidden",
    position: "relative",
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
  content: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: "clamp(2rem, 6vw, 5.5rem)",
    position: "relative",
    zIndex: 1,
  },
  note: {
    borderLeft: `3px solid ${colors.accent}`,
    color: colors.textMuted,
    fontSize: fonts.sizeSmall,
    fontStyle: "italic",
    lineHeight: 1.5,
    margin: `${spacing.lg} 0 0 0`,
    maxWidth: "620px",
    paddingLeft: spacing.sm,
  },
};
