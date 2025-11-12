import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { AllNewsPage } from "./pages/AllNewsPage";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:section" element={<AllNewsPage />} />
      </Routes>
    </Router>
  );
}
