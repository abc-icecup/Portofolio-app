import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HalamanPortfolioPengguna from "./pages/HalamanPortfolioPengguna";
import HalamanPortfolioTamu from "./pages/HalamanPortfolioTamu";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import ProjectHalamanPengguna from "./pages/ProjectHalamanPengguna";
import ProjectHalamanTamu from "./pages/ProjectHalamanTamu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== LANDING PAGE ===== */}
        <Route path="/" element={<LandingPage />} />

        {/* ===== PORTFOLIO ===== */}
        <Route path="/portfolio" element={<HalamanPortfolioPengguna />} />
        <Route path="/portfolio-tamu" element={<HalamanPortfolioTamu />} />

        {/* ===== AUTH ===== */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ===== PROJECT PENGGUNA ===== */}
        <Route path="/project-detail" element={<ProjectHalamanPengguna />} />
        <Route
          path="/project-halaman-pengguna-1"
          element={<ProjectHalamanPengguna />}
        />
        <Route
          path="/project-halaman-pengguna-2"
          element={<ProjectHalamanPengguna />}
        />

        {/* ===== PROJECT TAMU ===== */}
        <Route
          path="/project-halaman-tamu-1"
          element={<ProjectHalamanTamu />}
        />
        <Route
          path="/project-halaman-tamu-2"
          element={<ProjectHalamanTamu />}
        />
        <Route
          path="/project-halaman-tamu-3"
          element={<ProjectHalamanTamu />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;