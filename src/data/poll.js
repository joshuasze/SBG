import xjpFlower from "../assets/photos/XJPflower.png";

// Hardcoded poll mapping by slide index (0-based).
// Page 2  -> slide index 1
// Page 12 -> slide index 11
const POLLS_BY_SLIDE = {
  1: {
    question: "Which part of the Gardens would you most want to explore?",
    options: [
      "National Orchid Garden",
      "Rain Forest trail",
      "Heritage trees",
      "Lakes and lawns",
    ],
  },
  11: {
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

export function getPollForSlide(slideIndex) {
  return POLLS_BY_SLIDE[slideIndex] ?? null;
}

export function getPollSlideIndexes() {
  return Object.keys(POLLS_BY_SLIDE).map((key) => Number(key));
}

export default POLLS_BY_SLIDE;
