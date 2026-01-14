import React from "react";
import "../assets/css/Contact.css";
import MemberCard from "./MemberCard";
import LinaImg from "../assets/img/OCs/LCVP oGT.png";
import ImenImg from "../assets/img/OCs/LCVP F&L.png";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container container">
        <h2 className="contact__title">Signal the Command</h2>
        <p className="contact__description">
          Have questions or need more information about Start'Up 2K26? Reach out to the key members of our Organizing Committee below.
        </p>

        <div className="contact__cards">
          <MemberCard
            image={ImenImg}
            name="Imen Mtibaa"
            role="Organizing Committee President"
            email="mtibaaimen124@aiesec.net"
          />
          <MemberCard
            image={LinaImg}
            name="Lina Ben Hmida"
            role="Organizing Committee Vice President Delegate Experience"
            email="lina_benhmida@aiesec.net"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
