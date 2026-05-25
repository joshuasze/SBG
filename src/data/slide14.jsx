import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const similarityPoints = [
  "Hands-on and experiential learning",
  "Wellness benefits for mental and physical health",
  "Community space for families, events, and recreation",
];

const rows = [
  {
    perspective: "Wellness Model",
    sbg: [
      "Healing Garden with 400+ Southeast Asian medicinal plants",
      "Plants grouped by body systems",
    ],
    kew: [
      "Structured wellness programmes",
      "Examples: Tai Chi, sound baths, wellbeing walks",
    ],
  },
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Comparison</p>
    <h1 style={styles.heading}>Education, Wellness & Human Experience</h1>
    <SlideBody />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Comparison</p>
    <h1 style={styles.heading}>Education, Wellness & Human Experience</h1>
    <SlideBody />
  </SlideShell>
);

function SlideBody() {
  return (
    <div style={styles.layout}>
      <article style={styles.summaryCard}>
        <h2 style={styles.subTitle}>Similarities</h2>
        <ul style={styles.summaryList}>
          {similarityPoints.map((point) => (
            <li key={point} style={styles.summaryItem}>{point}</li>
          ))}
        </ul>
      </article>

      <article style={styles.tableCard}>
        <h2 style={styles.subTitle}>Differences</h2>
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Perspective</th>
                <th style={styles.th}>SBG</th>
                <th style={styles.th}>Kew</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.perspective}>
                  <th scope="row" style={styles.rowHead}>{row.perspective}</th>
                  <td style={styles.td}>
                    <ul style={styles.cellList}>
                      {row.sbg.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </td>
                  <td style={styles.td}>
                    <ul style={styles.cellList}>
                      {row.kew.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}

const styles = {
  heading: {
    ...slideText.heading,
    fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
    marginBottom: "clamp(0.5rem, 1vw, 0.8rem)",
  },
  layout: {
    display: "grid",
    gap: "clamp(0.55rem, 1.1vw, 0.9rem)",
    width: "100%",
    maxWidth: "1200px",
  },
  summaryCard: {
    ...slideUi.card,
    boxSizing: "border-box",
    padding: "clamp(0.65rem, 1.2vw, 0.95rem)",
  },
  subTitle: {
    margin: `0 0 ${spacing.xs} 0`,
    color: colors.accent,
    fontFamily: fonts.display,
    fontSize: "clamp(1.15rem, 2vw, 1.55rem)",
    lineHeight: 1.05,
  },
  summaryList: {
    margin: 0,
    paddingLeft: "1.2rem",
    display: "grid",
    gap: "0.25rem",
  },
  summaryItem: {
    color: colors.textSecondary,
    fontSize: "clamp(0.98rem, 1.4vw, 1.12rem)",
    lineHeight: 1.28,
  },
  tableCard: {
    ...slideUi.card,
    boxSizing: "border-box",
    padding: "clamp(0.6rem, 1vw, 0.85rem)",
  },
  tableWrap: {
    overflowX: "auto",
    width: "100%",
    WebkitOverflowScrolling: "touch",
  },
  table: {
    width: "100%",
    minWidth: "680px",
    borderCollapse: "collapse",
    tableLayout: "fixed",
  },
  th: {
    color: colors.textPrimary,
    textAlign: "left",
    fontSize: "clamp(1.05rem, 1.38vw, 1.15rem)",
    fontWeight: fonts.weightBold,
    padding: "0.4rem 0.45rem",
    border: `1px solid ${colors.border}`,
    background: "rgba(245, 240, 230, 0.06)",
    verticalAlign: "top",
  },
  rowHead: {
    color: colors.textPrimary,
    textAlign: "left",
    fontSize: "clamp(1.03rem, 1.33vw, 1.13rem)",
    fontWeight: fonts.weightBold,
    padding: "0.4rem 0.45rem",
    border: `1px solid ${colors.border}`,
    width: "20%",
    verticalAlign: "top",
  },
  td: {
    color: colors.textSecondary,
    fontSize: "clamp(1.02rem, 1.3vw, 1.12rem)",
    lineHeight: 1.24,
    padding: "0.38rem 0.45rem",
    border: `1px solid ${colors.border}`,
    verticalAlign: "top",
  },
  cellList: {
    margin: 0,
    paddingLeft: "1rem",
    display: "grid",
    gap: "0.2rem",
  },
};
