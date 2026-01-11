import React from "react";
import Countdown from "../components/Countdown";
import Host from "../components/Host";
import About from "../components/About";
import Venue from "../components/Venue";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Committees from "../components/Committees";

function HomePage() {
  return (
    <div className="home">

      <Home/>

      {/* Countdown Section */}
      <Countdown />

      {/* Host Section */}
      <Host />

      {/* About Section */}
      <About />
      <Committees />
      {/* Venue Section */}
      <Venue />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default HomePage;
