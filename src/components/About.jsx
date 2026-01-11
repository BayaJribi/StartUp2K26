import React from "react";
import "../assets/css/About.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="about__container container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">About Start'Up 2K26</h2>
            <p className="about__description">
              Start'Up 2K26 is a conference designed specifically for newly elected 
              Executive Boards of Local Committees. It marks the beginning of your 
              term, providing essential insights, training, and inspiration to lead 
              your teams effectively. Through workshops, networking, and interactive 
              sessions, you’ll gain the tools to set ambitious goals, drive impact, 
              and make this term your most successful one yet.
            </p>
          </div>
          <div className="about__image">
            <img src="src/assets/img/Startup2k25.png" alt="About StartUp Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
