import { colors, fonts, spacing } from "../styles/tokens.js";
import heritageLandscapePath from "../assets/photos/Slide 4 pic/IMG_7554.jpg";

const pillars = [
  "Conservation & Biodiversity",
  "Education, Wellness & Human Experience",
  "Heritage, Culture & Urban Identity",
];

export const PresenterSlide = () => (
  <SlideFrame>
    <SlideContent />
  </SlideFrame>
);

export const AudienceSlide = () => (
  <SlideFrame>
    <SlideContent />
  </SlideFrame>
);

function SlideFrame({ children }) {
  return (
    <div style={styles.page}>
      <div style={styles.stage}>
        {children}
      </div>
    </div>
  );
}

function SlideContent() {
  return (
    <section style={styles.layout}>
      <div style={styles.intro}>
        <p style={styles.eyebrow}>Singapore Botanic Gardens</p>
        <h1 style={styles.lede}>A Living Heritage Landscape</h1>
        <p style={styles.factBox}>
          Founded in 1859, Singapore Botanic Gardens is a 165-year-old tropical
          garden and Singapore&rsquo;s first UNESCO World Heritage Site.
        </p>
      </div>

      <div style={styles.detail}>
        <div style={styles.comboBlock}>
          <p style={styles.kicker}>It combines:</p>
          <div style={styles.pillars}>
            {pillars.map((pillar, index) => (
              <p key={pillar} style={styles.pillar}>
                <span style={styles.pillarNumber}>0{index + 1}</span>
                <span>{pillar}</span>
              </p>
            ))}
          </div>
        </div>

        <p style={styles.focus}>
          Today&rsquo;s focus: how the Gardens works as both a biodiversity site
          and a public urban space.
        </p>
      </div>
    </section>
  );
}

const styles = {
  page: {
    background:
      `linear-gradient(90deg, rgba(4, 10, 7, 0.86) 0%, rgba(4, 10, 7, 0.7) 54%, rgba(4, 10, 7, 0.42) 100%), linear-gradient(180deg, rgba(4, 10, 7, 0.4) 0%, rgba(4, 10, 7, 0.68) 100%), url(${heritageLandscapePath})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: colors.textPrimary,
    fontFamily: fonts.family,
    minHeight: "100%",
    width: "100%",
  },
  stage: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    minHeight: "100%",
    padding: "clamp(0.9rem, 2.4vw, 1.9rem)",
    width: "min(100%, 1320px)",
  },
  layout: {
    boxSizing: "border-box",
    display: "grid",
    gap: "clamp(0.7rem, 1.6vw, 1.15rem)",
    width: "100%",
  },
  intro: {
    borderBottom: `1px solid ${colors.borderSubtle}`,
    borderTop: `1px solid ${colors.borderSubtle}`,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 0,
    padding: "clamp(0.85rem, 2vw, 1.45rem) 0",
  },
  eyebrow: {
    color: colors.accent,
    fontSize: "1.02rem",
    fontWeight: fonts.weightBold,
    letterSpacing: 0,
    margin: `0 0 ${spacing.md} 0`,
    textTransform: "uppercase",
  },
  lede: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(2.4rem, 5.5vw, 5.4rem)",
    fontWeight: fonts.weightBold,
    lineHeight: 0.92,
    margin: `0 0 ${spacing.sm} 0`,
    maxWidth: "1180px",
    overflowWrap: "break-word",
    textShadow: "0 3px 18px rgba(0, 0, 0, 0.72)",
  },
  factBox: {
    background: "rgba(4, 10, 7, 0.64)",
    backdropFilter: "blur(3px)",
    border: `1px solid ${colors.border}`,
    borderLeft: `4px solid ${colors.accent}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    color: colors.textSecondary,
    fontSize: "clamp(1.07rem, 1.6vw, 1.3rem)",
    lineHeight: 1.36,
    margin: 0,
    maxWidth: "920px",
    padding: "0.75rem 0.9rem",
  },
  detail: {
    boxSizing: "border-box",
    display: "grid",
    gap: "clamp(0.75rem, 1.5vw, 1rem)",
    width: "100%",
  },
  comboBlock: {
    display: "grid",
    gap: "0.75rem",
  },
  kicker: {
    color: colors.accent,
    fontSize: "1.07rem",
    fontWeight: fonts.weightBold,
    letterSpacing: 0,
    margin: 0,
    textTransform: "uppercase",
  },
  pillars: {
    display: "grid",
    gap: "clamp(0.65rem, 1.3vw, 0.9rem)",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
  },
  pillar: {
    alignItems: "center",
    background: "rgba(4, 10, 7, 0.6)",
    backdropFilter: "blur(3px)",
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    columnGap: spacing.sm,
    color: colors.textSecondary,
    display: "grid",
    fontSize: "1rem",
    fontWeight: fonts.weightMedium,
    gridTemplateColumns: "auto 1fr",
    lineHeight: 1.28,
    margin: 0,
    minHeight: "clamp(4rem, 9vh, 5.25rem)",
    padding: "0.75rem 0.9rem",
  },
  pillarNumber: {
    alignItems: "center",
    background: colors.accentSoft,
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    color: colors.accent,
    display: "inline-flex",
    fontSize: "0.94rem",
    fontWeight: fonts.weightBold,
    height: "2.2rem",
    justifyContent: "center",
    width: "2.2rem",
  },
  focus: {
    background: "rgba(4, 10, 7, 0.66)",
    backdropFilter: "blur(3px)",
    border: `1px solid ${colors.border}`,
    borderLeft: `4px solid ${colors.accent}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    color: colors.textPrimary,
    fontSize: "1.05rem",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.42,
    margin: 0,
    padding: "0.9rem 1rem",
  },
};
