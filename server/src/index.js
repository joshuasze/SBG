import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import presentationSocket from "./socket/presentationSocket.js";

const app = express();
const httpServer = createServer(app);

// Set up Socket.IO with CORS so the frontend (on port 5173) can connect
const io = new Server(httpServer, {
  cors: {
    origin: "*", // allow all origins — fine for a local proof of concept
    methods: ["GET", "POST"],
  },
});

// Simple health check route — visit http://localhost:4000 to confirm it's running
app.get("/", (req, res) => {
  res.send("🎤 Presentation server is running!");
});

// Wire up socket events for every new connection
io.on("connection", (socket) => {
  presentationSocket(io, socket);
});

// Start listening
const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});