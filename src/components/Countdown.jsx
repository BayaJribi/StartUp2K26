import React, { useEffect, useState } from "react";
import "../assets/css/Countdown.css";

function Countdown() {
  const [time, setTime] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const target = new Date("2026-01-30T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) return clearInterval(interval);

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown container">
      <h3 className="countdown__title">We will sail in</h3>
      <div className="countdown__timer">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="countdown__box">
            <span id={unit}>{time[unit]}</span>
            <small>{unit.charAt(0).toUpperCase() + unit.slice(1)}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countdown;
