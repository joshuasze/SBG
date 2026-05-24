import { useEffect, useState } from "react";
import { socket } from "./lib/socket.js";
import PresenterPage from "./pages/PresenterPage.jsx";
import AudiencePage from "./pages/AudiencePage.jsx";

const PRESENTER_PASSWORD = "sbggpa";

export default function App() {
  const [connected, setConnected] = useState(false);
  const [presenterPassword, setPresenterPassword] = useState("");
  const [presenterUnlocked, setPresenterUnlocked] = useState(
    () => window.sessionStorage.getItem("presenterUnlocked") === "true",
  );
  const [presenterError, setPresenterError] = useState("");
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
    if (!presenterUnlocked) {
      return (
        <div style={loadingStyle}>
          <form
            style={passwordFormStyle}
            onSubmit={(event) => {
              event.preventDefault();

              if (presenterPassword === PRESENTER_PASSWORD) {
                window.sessionStorage.setItem("presenterUnlocked", "true");
                setPresenterUnlocked(true);
                setPresenterError("");
                return;
              }

              setPresenterError("Wrong password. Please try again.");
            }}
          >
            <h2 style={titleStyle}>Presenter password</h2>
            <input
              aria-label="Presenter password"
              autoFocus
              type="password"
              value={presenterPassword}
              onChange={(event) => {
                setPresenterPassword(event.target.value);
                setPresenterError("");
              }}
              style={inputStyle}
            />
            {presenterError && <p style={errorStyle}>{presenterError}</p>}
            <button type="submit" style={buttonStyle}>Enter Presenter View</button>
            <a href="/audience" style={secondaryLinkStyle}>Continue as Audience</a>
          </form>
        </div>
      );
    }

    return (
      <PresenterPage
        socket={socket}
        presentationState={presentationState}
        presenterPassword={PRESENTER_PASSWORD}
      />
    );
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
  color: "#f5f0e6",
  fontFamily: "'Inter', 'Avenir Next', system-ui, sans-serif",
  gap: "1rem",
  fontSize: "1.2rem",
};

const linkStyle = {
  color: "#d7a84f",
  fontSize: "1.2rem",
  textDecoration: "none",
  padding: "0.5rem 1.5rem",
  border: "1px solid #d7a84f",
  borderRadius: "8px",
};

const passwordFormStyle = {
  display: "flex",
  flexDirection: "column",
  width: "min(90vw, 360px)",
  gap: "0.85rem",
};

const titleStyle = {
  margin: 0,
  fontSize: "1.6rem",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid rgba(245, 240, 230, 0.24)",
  borderRadius: "8px",
  background: "rgba(245, 240, 230, 0.08)",
  color: "#f5f0e6",
  padding: "0.75rem 0.9rem",
  fontSize: "1rem",
  outline: "none",
};

const buttonStyle = {
  ...linkStyle,
  background: "#d7a84f",
  color: "#0f1117",
  cursor: "pointer",
  fontWeight: 700,
};

const secondaryLinkStyle = {
  color: "#c8d2c2",
  fontSize: "0.95rem",
  textAlign: "center",
  textDecoration: "none",
};

const errorStyle = {
  margin: 0,
  color: "#f29b9b",
  fontSize: "0.95rem",
};
