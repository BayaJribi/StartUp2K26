import React from "react";
import "../assets/css/Venue.css";
import VenueImg from "../assets/img/Venue1.jpg";

const venueDetails = [
  {
    title: "Conference Dates",
    value: "30–31 January & 1 February",
  },
  {
    title: "Venue",
    value: "Golf Residence Hotel - Kantaoui Sousse",
  },
  {
    title: "Participation Fee",
    value: "145 TND",
  },
];

function Venue() {
  return (
    <section className="venue" id="venue">
      <div className="venue__container container">
        <h2 className="venue__title">The Port of Departure</h2>

        <p className="venue__description">

          Below lies everything you need to know before embarking on the voyage.
        </p>

        {/* ===== Venue Details (Committees-style) ===== */}
        <div className="venue-details">
          <div className="venue-details__grid">
            {venueDetails.map((detail, index) => (
              <div className="venue-details__card" key={index}>
                <h3 className="venue-details__title">{detail.title}</h3>
                <p className="venue-details__value">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="venue__content">
          <div className="venue__images">
            <img
              src={VenueImg}
              alt="Venue"
              className="venue__image"
            />
          </div>

          <div className="venue__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.345!2d10.5932226!3d35.8895416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd898db7473659%3A0x793e7186f5b3806!2sGolf%20Residence%20Hotel!5e0!3m2!1sen!2stn!4v1700000000000!5m2!1sen!2stn"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Venue;
