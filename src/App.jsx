import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import OCPage from "./pages/OCPage"; // New page
import RegistrationPage from "./pages/RegistrationPage"; // New page

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
          {/* Home page with all sections inside Home.jsx */}
          <Route path="/" element={<HomePage />} />

          {/* Meet the Crew page */}
          <Route path="/meet-oc" element={<OCPage />} />

          {/* Registration page */}
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
