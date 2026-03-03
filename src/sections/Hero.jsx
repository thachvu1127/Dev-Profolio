import React, { useState } from "react";
import heroImg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return (
    <section
      className={
        "relative min-h-screen flex items-center overflow-hidden -z-30"
      }
    >
      <div className={"absolute inset-0"}>
        <img
          src={heroImg}
          alt="Hero image"
          className={"w-full h-full object-cover opacity-50 "}
        />
      </div>{" "}
      <div
        className={
          "absolute inset-0 bg-linear-to-b from-background/30 via-background/40 to-background/10"
        }
      ></div>
      <div
        className={
          "absolute inset-0 overflow-hidden pointer-events-none animate-pulse"
        }
      >
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className={"absolute w-1.5 h-1.5 rounded-full opacity-60"}
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};
export default Hero;
