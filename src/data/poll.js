import xjpFlower from "../assets/photos/XJPflower.png";
import { POLL_DEFINITIONS_BY_PAGE } from "./pollDefinitions.js";

const POLLS_BY_PAGE = {
  ...POLL_DEFINITIONS_BY_PAGE,
  11: {
    ...POLL_DEFINITIONS_BY_PAGE[11],
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
