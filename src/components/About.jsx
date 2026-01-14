import React from "react";
import "../assets/css/About.css";
import StartupImg from "../assets/img/Startup2k25.png";
function About() {
  return (
    <section className="about" id="about">
      <div className="about__container container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">The Legend of Start'Up 2K26</h2>
            <p className="about__description">
              Start'Up 2K26 is a conference designed specifically for newly elected
              Executive Boards of Local Committees. It marks the beginning of your
              term, providing essential insights, training, and inspiration to lead
              your teams effectively. Through it, you'll gain the tools to set ambitious goals, drive impact,
              and make this term your most successful one yet.
            </p>
          </div>
          <div className="about__image">
            <img src={StartupImg} alt="About StartUp Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
