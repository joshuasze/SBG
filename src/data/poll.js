import xjpFlower from "../assets/photos/XJPflower.png";

// Hardcoded poll mapping by presentation page number (1-based).
// This keeps behavior stable even if internal slide ids are reordered.
const POLLS_BY_PAGE = {
  2: {
    question: "Which part of the Gardens would you most want to explore?",
    options: [
      "National Orchid Garden",
      "Rain Forest trail",
      "Heritage trees",
      "Lakes and lawns",
    ],
  },
  12: {
    question: "Who is this orchid named after?",
    options: [
      "Xi Jinping",
      "Pope Francis",
      "Obama",
      "Jonathan",
    ],
    image: xjpFlower,
  },
};

export function getPollForPage(pageNumber) {
  return POLLS_BY_PAGE[pageNumber] ?? null;
}

export function hasPollForPage(pageNumber) {
  return Boolean(getPollForPage(pageNumber));
}

export function getPollPageNumbers() {
  return Object.keys(POLLS_BY_PAGE).map((key) => Number(key));
}

export default POLLS_BY_PAGE;
