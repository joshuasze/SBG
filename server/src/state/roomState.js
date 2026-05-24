// This object tracks everything happening in the presentation right now.
// Since this is a proof of concept with one presenter, we keep it simple —
// no rooms, no database, just one shared state.

const state = {
  currentSlide: 0,      // which slide is currently showing
  pollOpen: false,       // is the poll currently active?
  pollVotes: {},         // stores votes: { "Option A": 3, "Option B": 1 }
};

export default state;