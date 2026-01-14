import React from "react";
import "../assets/css/Home.css";
import Ship from "../assets/img/boat_transparent_clean.png";
import Waves from "../assets/img/waves_transparent.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__bg-overlay"></div>
      <div className="home__container container">
        <div className="home__data">
          <h3 className="home__subtitle">Welcome Aboard</h3>
          <h1 className="home__title">
            START'UP <br />
            <span>2K26</span>
          </h1>
          <a href="/register" className="home__button">
            Register now
          </a>
        </div>

        <div className="home__images">
          {/* 3D Ship Image */}
          <img src={Ship} alt="Pirate Ship" className="home__ship" />
        </div>
      </div>

      {/* Back Waves - Behind Ship */}
      <img src={Waves} alt="Waves Back" className="home__waves-back" />

      {/* Foreground Waves - Full Width */}
      <img src={Waves} alt="Waves Front" className="home__waves-fore" />
    </section>
  );
}

export default Home;
