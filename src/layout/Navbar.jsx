import React from "react";
import Button from "@/components/Button.jsx";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav
        className={"container mx-auto px-6 flex items-center justify-between"}
      >
        <a
          href={"#"}
          className={"text-xl font-bold tracking-tight hover:text-primary"}
        >
          TV <span className={"text-primary"}>.</span>
        </a>

        {/*  Desktop Nav*/}
        <div className={"hidden md:flex items-center gap-1"}>
          <div
            className={"glass rounded-full px-2 py-1 flex items-center gap-1"}
          >
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className={
                  "px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={"hidden md:block"}>
          <Button btnSize={"sm"}>Contact Me</Button>
        </div>

        {/*  Mobile menu button */}
      </nav>
    </header>
  );
};
export default Navbar;
