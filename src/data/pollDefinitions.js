// Hardcoded poll mapping by presentation page number (1-based).
// This keeps behavior stable even if internal slide ids are reordered.
export const POLL_DEFINITIONS_BY_PAGE = {
  3: {
    question: "Can you find an animal in this picture?",
    options: [
      "Yes, I found it",
      "Not yet",
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
  },
  21: {
    question: "Like?",
    options: [
      "Yes",
      "Still Yes, but a different option",
    ],
  },
};

export default POLL_DEFINITIONS_BY_PAGE;
