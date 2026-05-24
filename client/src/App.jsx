import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PresenterPage from "./pages/PresenterPage";
import AudiencePage from "./pages/AudiencePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to audience by default */}
        <Route path="/" element={<Navigate to="/audience" />} />

        {/* Presenter link — only share this with the presenter */}
        <Route path="/presenter" element={<PresenterPage />} />

        {/* Audience link — share this with everyone */}
        <Route path="/audience" element={<AudiencePage />} />
      </Routes>
    </BrowserRouter>
  );
}
