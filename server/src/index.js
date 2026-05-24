import express from "express";
import { createServer } from "http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "socket.io";
import presentationSocket from "./socket/presentationSocket.js";

const app = express();
const httpServer = createServer(app);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDistPath = path.resolve(__dirname, "../../client/dist");

// Set up Socket.IO with CORS so the frontend (on port 5173) can connect
const io = new Server(httpServer, {
  cors: {
    origin: "*", // allow all origins — fine for a local proof of concept
    methods: ["GET", "POST"],
  },
});

// Simple health check route.
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Serve the built Vite client from the same origin as the Socket.IO server.
app.use(express.static(clientDistPath));

// Let React Router handle direct visits to client-side routes.
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
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
