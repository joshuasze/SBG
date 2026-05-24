import { io } from "socket.io-client";
import config from "../config.js";

// Create one connection and share it across the whole app
export const socket = io(config.SERVER_URL, {
  autoConnect: true,
});