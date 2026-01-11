import React from "react";
import "../assets/css/Host.css";

function Host() {
  return (
    <section className="host" id="host">
      <div className="host__container container">
        <h2 className="host__title">The Crew Behind the Journey</h2>
        <p className="host__description">
          Since <strong>1987</strong>, <strong>LC SFAX</strong> has been sailing through
          uncharted waters, raising leaders, explorers, and changemakers.
          Like a fearless pirate crew, the LC has weathered storms, conquered
          new horizons, and carried the flag of leadership across generations.
          Rooted in resilience and driven by ambition, LC SFAX proudly hosts
          this voyage, where legends are forged and the next captains set sail.
        </p>
      </div>
      <img src="src/assets/img/LCs/Sfax.png" alt="LC SFAX Logo" className="host__logo-bg" />
    </section>
  );
}

export default Host;
