import xjpFlower from "../assets/photos/XJPflower.png";

// Hardcoded poll mapping by slide id (not array position).
// Slide id 1  -> Gardens preference poll
// Slide id 12 -> Orchid image poll
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

export function getPollForSlide(slideIndex) {
  return POLLS_BY_SLIDE[slideIndex] ?? null;
}

export function getPollSlideIndexes() {
  return Object.keys(POLLS_BY_SLIDE).map((key) => Number(key));
}

export default POLLS_BY_SLIDE;
