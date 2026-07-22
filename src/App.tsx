import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import PlanWebsite from "./pages/PlanWebsite";
import Booking from "./pages/Booking";

import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Templates */}
        <Route
          path="/templates"
          element={<Templates />}
        />

        {/* Pricing */}
        <Route
          path="/pricing"
          element={<Pricing />}
        />

        {/* Portfolio */}
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        {/* Reviews */}
        <Route
          path="/reviews"
          element={<Reviews />}
        />

        {/* Plan Website */}
        <Route
          path="/plan"
          element={<PlanWebsite />}
        />

        {/* Booking */}
        <Route
          path="/booking"
          element={<Booking />}
        />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* Admin Dashboard (Dashboard + Slot Manager) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;