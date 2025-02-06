import React, { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date().getTime() + 8 * 24 * 60 * 60 * 1000; 

  const [timeLeft, setTimeLeft] = useState(targetDate);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now; 

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setFlip(true);
        setTimeout(() => setFlip(false), 500);
        setTimeLeft(difference); 
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { label: "DAYS", value: days },
        { label: "HOURS", value: hours },
        { label: "MINUTES", value: minutes },
        { label: "SECONDS", value: seconds },
      ].map((item, index) => (
        <section key={index} className="flex flex-col items-center gap-4">
          <div className={`flip-card ${flip ? "flip" : ""}`}>
            <div className="flip-card-inner">
                <div className="flip-card-top">
                <span>{item.value}</span>
                </div>
                <div className="flip-card-bottom">
                <span>{item.value}</span>
                </div>
            </div>
          </div>

          <span className="duration-label">{item.label}</span>
        </section>
      ))}
    </div>
  );
};

export default Countdown;
