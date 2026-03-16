import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

// 1. ScrollToTop Component: Essential for professional UX
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Ensures every page starts at the top */}
      <ScrollToTop />

      {/* Wrapper to handle font smoothing and background */}
      <div className="flex flex-col min-h-screen antialiased bg-white selection:bg-yellow-200">
        <Navbar />

        {/* Main content wrapper: 
          flex-grow ensures Footer stays at the bottom on short pages.
          overflow-hidden prevents horizontal scroll bugs from animations.
        */}
        <main className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
