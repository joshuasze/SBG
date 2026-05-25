import { getPollForPage, getPollPageNumbers, hasPollForPage } from "./poll.js";

export const POLL_PAGE_NUMBERS = getPollPageNumbers();

export function getPageNumberFromSlideIndex(slideIndex) {
  return slideIndex + 1;
}

export function isPollEnabledForSlide(slideIndex) {
  const pageNumber = getPageNumberFromSlideIndex(slideIndex);
  return hasPollForPage(pageNumber);
}

export function getPollForSlide(slideIndex) {
  const pageNumber = getPageNumberFromSlideIndex(slideIndex);
  return getPollForPage(pageNumber);
}
