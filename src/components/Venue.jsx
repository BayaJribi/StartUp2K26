import React from "react";
import "../assets/css/Venue.css";

function Venue() {
  return (
    <section className="venue" id="venue">
      <div className="venue__container container">
        <h2 className="venue__title">Venue</h2>
        <p className="venue__description">
          Start'Up 2K26 will take place at a carefully selected venue, providing a 
          professional environment for workshops, networking, and interactive sessions. 
          Here’s where your journey begins!
        </p>

        <div className="venue__content">
          <div className="venue__images">
            <img src="assets/img/venue1.jpg" alt="Venue Image 1" className="venue__image" />
            <img src="assets/img/venue2.jpg" alt="Venue Image 2" className="venue__image" />
          </div>
          <div className="venue__map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.9169639568445!2d10.74056821518596!3d34.73675778044326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fddcb93f053f71%3A0xa5d5c6f0f7e33e04!2sSfax%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Venue;
