import React, { useState } from "react";
import heroImg from "@/assets/hero-bg.jpg";
import Button from "@/components/Button.jsx";
import {
  MoveRight,
  ArrowDownToLine,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import doug from "@/assets/doug.png";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <section
      className={"relative min-h-screen flex items-center overflow-hidden z-0"}
    >
      <div className={"absolute inset-0"}>
        <img
          src={heroImg}
          alt="Hero image"
          className={"w-full h-full object-cover opacity-50 "}
        />
      </div>

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
      {/*  Content of hero section */}
      <div className={"relative z-10 container mx-auto px-6 pt-32 pb-20"}>
        <div
          className={
            "grid lg:grid-cols-2 items-center place-items-center gap-12"
          }
        >
          {/*  left column - text area*/}
          <div className={"flex flex-col gap-7"}>
            <div
              className={
                "glass py-2 px-4 rounded-full flex items-center gap-2 text-primary w-80 animate-fade-in"
              }
            >
              <div className={"text-2xl"}>•</div>
              <p className={"animate-pulse"}>
                <ReactTyped
                  strings={["Software Engineer • React Specialist"]}
                  backSpeed={50}
                  loop={true}
                  typeSpeed={40}
                ></ReactTyped>
              </p>
            </div>
            <div className={"max-w-3xl"}>
              <h1
                className={
                  "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground animate-fade-in animation-delay-200"
                }
              >
                Crafting{" "}
                <span className={"text-primary glow-text"}>Digital</span>{" "}
                experiences with{" "}
                <span className={"font-serif italic font-normal"}>
                  precision
                </span>
              </h1>
              <p
                className={
                  "text-lg mt-4 text-muted-foreground animate-fade-in animation-delay-600"
                }
              >
                Hi, I'm Thach Vu - a disciplined, systems-minded self-taught
                engineer transitioning from healthcare into tech, driven by a
                desire to build clearer, better-designed software.
              </p>
            </div>
            <div className={"flex gap-4"}>
              <Button>
                Contact Me <MoveRight></MoveRight>
              </Button>
              <button
                className={
                  "relative px-6 py-3  border border-primary overflow-hidden group rounded-full cursor-pointer flex items-center gap-2"
                }
              >
                <span
                  className={
                    "absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 rounded-full transition-transform duration-300 pointer-events-none"
                  }
                ></span>

                <span
                  className={
                    "relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-500 flex items-center gap-2 "
                  }
                >
                  <ArrowDownToLine></ArrowDownToLine>
                  Download CV
                </span>
              </button>
            </div>
            {/*  social */}
            <div
              className={
                "flex items-center gap-4 mt-8 text-lg animate-fade-in animation-delay-500 "
              }
            >
              <span>Follow Me:</span>
              {[
                {
                  icon: Github,
                  href: "#",
                },
                {
                  icon: Linkedin,
                  href: "#",
                },
                {
                  icon: Facebook,
                  href: "#",
                },
              ].map((social, index) => (
                <a
                  href={social.href}
                  className={
                    "hover:text-primary animate-bounce p-2 rounded-full glass hover:bg-primary/20 transition-all duration-500"
                  }
                >
                  {<social.icon></social.icon>}
                </a>
              ))}
            </div>
          </div>

          {/*  right column - profile image*/}
          <div className={"relative animate-fade-in animation-delay-300"}>
            <div
              className={
                "relative glass rounded-3xl p-2 glow-border animate-pulse"
              }
            >
              <img
                src={doug}
                alt="dough"
                className={"max-w-80 object-cover rounded-2xl"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
