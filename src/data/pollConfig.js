import { getPollForSlide, getPollSlideIndexes } from "./poll.js";

export const POLL_SLIDE_INDEXES = getPollSlideIndexes();

export function isPollEnabledForSlide(slideIndex) {
  return Boolean(getPollForSlide(slideIndex));
}

export { getPollForSlide };
