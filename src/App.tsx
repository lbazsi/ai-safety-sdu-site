import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/About";
import AiSafetyPage from "./pages/AiSafety";
import AchievementsPage from "./pages/Achievements";
import EventsPage from "./pages/Events";
import ContactPage from "./pages/Contact";
import OurBoardPage from "./pages/OurBoard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ai-safety" element={<AiSafetyPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/our-board" element={<OurBoardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
