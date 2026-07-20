import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import PlanWebsite from "./pages/PlanWebsite";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/plan" element={<PlanWebsite />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;