import { useEffect, useState } from "react";
import { socket } from "./lib/socket.js";
import PresenterPage from "./pages/PresenterPage.jsx";
import AudiencePage from "./pages/AudiencePage.jsx";

export default function App() {
  const [connected, setConnected] = useState(false);
  const [presentationState, setPresentationState] = useState({
    currentSlide: 0,
    pollOpen: false,
    pollVotes: {},
  });

  useEffect(() => {
    function handleConnect() {
      setConnected(true);
    }

    function handleDisconnect() {
      setConnected(false);
    }

    function handleInit({ currentSlide, pollOpen, pollVotes }) {
      setPresentationState({
        currentSlide,
        pollOpen,
        pollVotes,
      });
    }

    function handleSlideChanged({ slideIndex }) {
      setPresentationState((current) => ({
        ...current,
        currentSlide: slideIndex,
        pollOpen: false,
        pollVotes: {},
      }));
    }

    function handlePollToggled({ open }) {
      setPresentationState((current) => ({
        ...current,
        pollOpen: open,
        pollVotes: open ? current.pollVotes : {},
      }));
    }

    function handlePollResults({ votes }) {
      setPresentationState((current) => ({
        ...current,
        pollVotes: votes,
      }));
    }

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("init", handleInit);
    socket.on("slide_changed", handleSlideChanged);
    socket.on("poll_toggled", handlePollToggled);
    socket.on("poll_results", handlePollResults);

    socket.connect();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("init", handleInit);
      socket.off("slide_changed", handleSlideChanged);
      socket.off("poll_toggled", handlePollToggled);
      socket.off("poll_results", handlePollResults);
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

  if (path === "/presenter") {
    return <PresenterPage socket={socket} presentationState={presentationState} />;
  }

  if (path === "/audience") {
    return <AudiencePage socket={socket} presentationState={presentationState} />;
  }

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
