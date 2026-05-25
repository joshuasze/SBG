import { colors, fonts, spacing } from "../styles/tokens.js";

const pillars = [
  "Conservation & Biodiversity",
  "Education, Wellness & Human Experience",
  "Heritage, Culture & Urban Identity",
];

export const PresenterSlide = () => (
  <SlideFrame note="Use this slide to frame the Gardens as both a managed biodiversity site and an everyday civic landscape.">
    <SlideContent />
  </SlideFrame>
);

export const AudienceSlide = () => (
  <SlideFrame>
    <SlideContent />
  </SlideFrame>
);

function SlideFrame({ children, note }) {
  return (
    <div style={styles.page}>
      <div style={styles.stage}>
        {children}
        {note && <p style={styles.note}>Presenter notes: {note}</p>}
      </div>
    </div>
  );
}

function SlideContent() {
  return (
    <section style={styles.layout}>
      <div style={styles.intro}>
        <p style={styles.eyebrow}>Singapore Botanic Gardens</p>
        <p style={styles.lede}>
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
      "linear-gradient(135deg, #07110d 0%, #0b1712 42%, #16281e 100%)",
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
    padding: "clamp(1.25rem, 4vw, 4rem)",
    width: "min(100%, 1380px)",
  },
  layout: {
    alignItems: "stretch",
    boxSizing: "border-box",
    display: "grid",
    gap: "clamp(1.25rem, 3.5vw, 3rem)",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 26rem), 1fr))",
    width: "100%",
  },
  intro: {
    borderBottom: `1px solid ${colors.borderSubtle}`,
    borderTop: `1px solid ${colors.borderSubtle}`,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "min(60svh, 34rem)",
    padding: "clamp(1.25rem, 4vw, 3rem) 0",
  },
  eyebrow: {
    color: colors.accent,
    fontSize: "0.9rem",
    fontWeight: fonts.weightBold,
    letterSpacing: 0,
    margin: `0 0 ${spacing.md} 0`,
    textTransform: "uppercase",
  },
  lede: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "4.25rem",
    fontWeight: fonts.weightBold,
    lineHeight: 0.96,
    margin: 0,
    maxWidth: "900px",
    overflowWrap: "break-word",
  },
  detail: {
    alignSelf: "center",
    boxSizing: "border-box",
    display: "grid",
    gap: "clamp(1.25rem, 3vw, 2rem)",
    width: "100%",
  },
  comboBlock: {
    display: "grid",
    gap: "clamp(0.75rem, 2vw, 1rem)",
  },
  kicker: {
    color: colors.accent,
    fontSize: "0.95rem",
    fontWeight: fonts.weightBold,
    letterSpacing: 0,
    margin: 0,
    textTransform: "uppercase",
  },
  pillars: {
    display: "grid",
    gap: "clamp(0.65rem, 1.4vw, 0.9rem)",
  },
  pillar: {
    alignItems: "center",
    background: "rgba(245, 240, 230, 0.06)",
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    columnGap: spacing.sm,
    color: colors.textSecondary,
    display: "grid",
    fontSize: "1.12rem",
    fontWeight: fonts.weightMedium,
    gridTemplateColumns: "auto 1fr",
    lineHeight: 1.28,
    margin: 0,
    minHeight: "clamp(4rem, 8vw, 5rem)",
    padding: "clamp(0.75rem, 1.8vw, 1.1rem)",
  },
  pillarNumber: {
    alignItems: "center",
    background: colors.accentSoft,
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    color: colors.accent,
    display: "inline-flex",
    fontSize: "0.82rem",
    fontWeight: fonts.weightBold,
    height: "2.45rem",
    justifyContent: "center",
    width: "2.45rem",
  },
  focus: {
    background: "rgba(79, 122, 89, 0.22)",
    border: `1px solid ${colors.border}`,
    borderLeft: `4px solid ${colors.accent}`,
    borderRadius: "8px",
    boxSizing: "border-box",
    color: colors.textPrimary,
    fontSize: "1.28rem",
    fontWeight: fonts.weightMedium,
    lineHeight: 1.42,
    margin: 0,
    padding: "clamp(1rem, 2.5vw, 1.5rem)",
  },
  note: {
    borderLeft: `3px solid ${colors.accent}`,
    boxSizing: "border-box",
    color: colors.textMuted,
    fontSize: fonts.sizeSmall,
    fontStyle: "italic",
    lineHeight: 1.5,
    margin: `${spacing.lg} auto 0 0`,
    maxWidth: "720px",
    paddingLeft: spacing.sm,
  },
};
