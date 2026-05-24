import state from "../state/roomState.js";

const PRESENTER_PASSWORD = "sbggpa";

export default function presentationSocket(io, socket) {
  console.log(`✅ Client connected: ${socket.id}`);

  function hasPresenterAccess(password) {
    return password === PRESENTER_PASSWORD;
  }

  // When a new client connects, send them the current state immediately
  // so they don't see a stale slide or missed poll
  socket.emit("init", {
    currentSlide: state.currentSlide,
    pollOpen: state.pollOpen,
    pollVotes: state.pollVotes,
  });

  // ── Presenter moves to a different slide ──────────────────
  socket.on("slide_changed", ({ slideIndex, presenterPassword } = {}) => {
    if (!hasPresenterAccess(presenterPassword)) return;
    if (!Number.isInteger(slideIndex) || slideIndex < 0) return;

    state.currentSlide = slideIndex;
    state.pollOpen = false;     // always close poll on slide change
    state.pollVotes = {};       // reset votes for the new slide

    // Broadcast to EVERYONE (including presenter) so all screens stay in sync
    io.emit("slide_changed", { slideIndex });
    io.emit("poll_toggled", { open: false });

    console.log(`📽  Slide changed to ${slideIndex}`);
  });

  // ── Presenter opens or closes the poll ───────────────────
  socket.on("poll_toggled", ({ open, presenterPassword } = {}) => {
    if (!hasPresenterAccess(presenterPassword)) return;
    if (typeof open !== "boolean") return;

    state.pollOpen = open;

    if (!open) state.pollVotes = {}; // clear votes when poll closes

    io.emit("poll_toggled", { open });
    console.log(`📊 Poll ${open ? "opened" : "closed"}`);
  });

  // ── Audience member submits a poll vote ──────────────────
  socket.on("poll_vote", ({ answer } = {}) => {
    if (!state.pollOpen) return; // ignore votes if poll is closed
    if (typeof answer !== "string" || answer.trim() === "") return;

    // Count the vote
    state.pollVotes[answer] = (state.pollVotes[answer] || 0) + 1;

    // Send updated vote counts to everyone (so presenter can see live results)
    io.emit("poll_results", { votes: state.pollVotes });

    console.log(`🗳  Vote received: "${answer}"`, state.pollVotes);
  });

  // ── Client disconnects ───────────────────────────────────
  socket.on("disconnect", () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
}
