import React from "react";
import "../assets/css/Contact.css";
import MemberCard from "./MemberCard";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container container">
        <h2 className="contact__title">Contact the OC Team</h2>
        <p className="contact__description">
          Have questions or need more information about Start'Up 2K26? Reach out to the key members of our Organizing Committee below.
        </p>

        <div className="contact__cards">
          <MemberCard
            image="src/assets/img/OCs/LCVP F&L.png"
            name="Imen Mtibaa"
            role="Organizing Committee President"
            email="mtibaaimen124@aiesec.net"
          />
          <MemberCard
            image="src/assets/img/OCs/LCVP oGT.png"
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
