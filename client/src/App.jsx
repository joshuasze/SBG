import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import PresenterPage from "./pages/PresenterPage.jsx";
import AudiencePage from "./pages/AudiencePage.jsx";

// Connect to the backend server
// During development this runs on port 4000
const socket = io("http://localhost:4000");

export default function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  // Decide which view to show based on the URL
  // Presenter opens:  http://localhost:5173/presenter
  // Audience opens:   http://localhost:5173/audience
  const path = window.location.pathname;

  if (!connected) {
    return (
      <div style={loadingStyle}>
        <p>⏳ Connecting to server...</p>
      </div>
    );
  }

  if (path === "/presenter") return <PresenterPage socket={socket} />;
  if (path === "/audience") return <AudiencePage socket={socket} />;

  // Fallback if no valid path
  return (
    <div style={loadingStyle}>
      <h2>Choose a view:</h2>
      <a href="/presenter" style={linkStyle}>🎤 Presenter View</a>
      <a href="/audience" style={linkStyle}>👥 Audience View</a>
    </div>
  );
}

const loadingStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "#0f1117",
  color: "#ffffff",
  fontFamily: "sans-serif",
  gap: "1rem",
  fontSize: "1.2rem",
};

const linkStyle = {
  color: "#01696f",
  fontSize: "1.2rem",
  textDecoration: "none",
  padding: "0.5rem 1.5rem",
  border: "1px solid #01696f",
  borderRadius: "8px",
};