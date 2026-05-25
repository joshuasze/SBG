// Page 2 in the presenter UI is 1-based, so it maps to slide index 1.
export const POLL_SLIDE_INDEX = 1;

export function isPollEnabledForSlide(slideIndex) {
  return slideIndex === POLL_SLIDE_INDEX;
}
