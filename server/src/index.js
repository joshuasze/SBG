import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { EVENTS } from "../../shared/events.js";

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" }
});

// ── In-memory state ──────────────────────────────────────────────
// This is the "source of truth" for the whole presentation.
// Everything lives here in memory (no database needed).
let state = {
  currentSlide: 0,
  poll: null,    // null means no poll is open right now
  votes: {},     // looks like { 0: 3, 1: 5, 2: 1 } (option index: vote count)
};

// ── Socket events ────────────────────────────────────────────────
io.on("connection", (socket) => {
  console.log("Someone connected:", socket.id);

  // Presenter joins — send them the current state immediately
  socket.on(EVENTS.JOIN_AS_PRESENTER, () => {
    console.log("Presenter joined");
    socket.emit("state:sync", state);
  });

  // Audience member joins — send them the current state immediately
  socket.on(EVENTS.JOIN_AS_AUDIENCE, () => {
    console.log("Audience member joined");
    socket.emit("state:sync", state);
  });

  // Presenter changed the slide
  socket.on(EVENTS.SLIDE_CHANGE, (slideIndex) => {
    state.currentSlide = slideIndex;
    state.poll = null;  // close any open poll
    state.votes = {};
    io.emit("state:sync", state);  // tell EVERYONE the new state
    console.log("Slide changed to:", slideIndex);
  });

  // Presenter opened a poll
  socket.on(EVENTS.POLL_OPEN, (poll) => {
    state.poll = poll;
    state.votes = {};
    poll.options.forEach((_, i) => { state.votes[i] = 0; });
    io.emit("state:sync", state);
    console.log("Poll opened:", poll.question);
  });

  // Presenter closed the poll
  socket.on(EVENTS.POLL_CLOSE, () => {
    state.poll = null;
    state.votes = {};
    io.emit("state:sync", state);
    console.log("Poll closed");
  });

  // An audience member submitted a vote
  socket.on(EVENTS.POLL_VOTE, (optionIndex) => {
    if (state.poll && state.votes[optionIndex] !== undefined) {
      state.votes[optionIndex]++;
      io.emit(EVENTS.POLL_RESULTS, state.votes);  // send live results to all
      console.log("Vote for option:", optionIndex);
    }
  });

  socket.on("disconnect", () => {
    console.log("Someone disconnected:", socket.id);
  });
});

// ── Start the server ─────────────────────────────────────────────
const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});