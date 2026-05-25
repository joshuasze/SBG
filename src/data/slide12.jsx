import { colors, fonts, spacing } from "../styles/tokens.js";
import SlideShell from "./SlideShell.jsx";
import { slideText, slideUi } from "./slideTheme.js";

const comparisonRows = [
  ["Founded", "1859", "1759"],
  ["Size", "82 hectares", "132 hectares"],
  ["Climate", "Tropical (year-round)", "Temperate (seasonal)"],
  ["Plant Collection", "10,000+ species; 1,000+ orchid hybrids", "17,000+ living plant species"],
  ["Admission", "Free (except Orchid Garden)", "Paid (~GBP 22 adult)"],
  ["Annual Visitors", "~4.4 million", "~2 million"],
];

export const PresenterSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Comparison</p>
    <h1 style={styles.heading}>Why Compare with Kew Gardens</h1>
    <SlideBody />
  </SlideShell>
);

export const AudienceSlide = ({ photo }) => (
  <SlideShell photo={photo} align="left">
    <p style={slideText.eyebrow}>Comparison</p>
    <h1 style={styles.heading}>Why Compare with Kew Gardens</h1>
    <SlideBody />
  </SlideShell>
);

function SlideBody() {
  return (
    <div style={styles.layout}>
      <article style={styles.summaryCard}>
        <ul style={styles.summaryList}>
          <li style={styles.summaryItem}>Historical Connection</li>
          <li style={styles.summaryItem}>Both are UNESCO Heritage Sites</li>
        </ul>
      </article>

      <article style={styles.tableCard}>
        <h2 style={styles.subTitle}>Basic Comparison</h2>
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Metric</th>
                <th style={styles.th}>Singapore Botanic Gardens</th>
                <th style={styles.th}>Royal Botanic Gardens, Kew (UK)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([metric, sbg, kew]) => (
                <tr key={metric}>
                  <th scope="row" style={styles.rowHead}>{metric}</th>
                  <td style={styles.td}>{sbg}</td>
                  <td style={styles.td}>{kew}</td>
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
    fontSize: "clamp(1.8rem, 3.9vw, 3.1rem)",
    marginBottom: "clamp(0.55rem, 1vw, 0.8rem)",
  },
  layout: {
    display: "grid",
    gap: "clamp(0.6rem, 1.2vw, 0.95rem)",
    width: "100%",
    maxWidth: "1200px",
  },
  summaryCard: {
    ...slideUi.card,
    boxSizing: "border-box",
    padding: "clamp(0.7rem, 1.3vw, 1rem)",
  },
  summaryList: {
    margin: 0,
    paddingLeft: "1.2rem",
    display: "grid",
    gap: "0.35rem",
  },
  summaryItem: {
    color: colors.textPrimary,
    fontFamily: fonts.display,
    fontSize: "clamp(1.24rem, 2.01vw, 1.54rem)",
    lineHeight: 1.15,
  },
  tableCard: {
    ...slideUi.card,
    boxSizing: "border-box",
    padding: "clamp(0.65rem, 1.2vw, 0.9rem)",
  },
  subTitle: {
    margin: `0 0 ${spacing.xs} 0`,
    color: colors.accent,
    fontFamily: fonts.display,
    fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
    lineHeight: 1.05,
  },
  tableWrap: {
    overflowX: "auto",
    width: "100%",
    WebkitOverflowScrolling: "touch",
  },
  table: {
    width: "100%",
    minWidth: "700px",
    borderCollapse: "collapse",
    tableLayout: "fixed",
  },
  th: {
    color: colors.textPrimary,
    textAlign: "left",
    fontSize: "clamp(1.05rem, 1.38vw, 1.15rem)",
    fontWeight: fonts.weightBold,
    padding: "0.42rem 0.45rem",
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
    width: "22%",
    verticalAlign: "top",
  },
  td: {
    color: colors.textSecondary,
    fontSize: "clamp(1.02rem, 1.3vw, 1.12rem)",
    lineHeight: 1.24,
    padding: "0.4rem 0.45rem",
    border: `1px solid ${colors.border}`,
    verticalAlign: "top",
  },
};
