import React, { useState, useEffect } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    const meteorInterval = setInterval(() => generateMeteor(), 4000); // a meteor every 4s
    return () => clearInterval(meteorInterval);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteor = () => {
    const meteor = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 50, // meteors come from top half
    };
    setMeteors((prev) => [...prev, meteor]);

    // remove meteor after animation
    setTimeout(() => {
      setMeteors((prev) => prev.filter((m) => m.id !== meteor.id));
    }, 2000);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 🌟 Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size * 2}px`,
            height: `${star.size * 2}px`,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: star.opacity,
            boxShadow: "0 0 8px white",
            animation: `pulse-subtle ${star.animationDuration}s ease-in-out infinite`,
          }}
        ></div>
      ))}

      {/* ☄️ Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          style={{
            position: "absolute",
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            width: "120px",
            height: "2px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            transform: "rotate(-45deg)",
            opacity: 0.8,
            animation: "meteor 1.5s linear forwards",
          }}
        ></div>
      ))}
    </div>
  );
}

export default StarBackground;
