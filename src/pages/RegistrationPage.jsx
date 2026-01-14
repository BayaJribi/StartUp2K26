import React from "react";

function RegistrationPage() {
  return (
    <section className="registration-page container ">
      <h2 className="registration-page__title">Register for Start'Up 2K26</h2>
      <p className="registration-page__description">
        Fill out the form below to secure your spot!
      </p>

      {/* Embed Tally form */}
      <iframe
        src="https://tally.so/r/MeNWeX"
        width="100%"
        height="800"
        frameBorder="0"
        title="Start'Up 2K26 Registration"
        style={{ border: "none", borderRadius: "1rem" }}
      ></iframe>
    </section>
  );
}

export default RegistrationPage;
