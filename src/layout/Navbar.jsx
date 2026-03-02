import React, { useState } from "react";
import Button from "@/components/Button.jsx";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <button className={"md:hidden p-2 text-foreground "}>
          {menuOpen ? (
            <X
              onClick={() => setMenuOpen(!menuOpen)}
              className={"hover:text-primary cursor-pointer"}
            />
          ) : (
            <Menu
              onClick={() => setMenuOpen(!menuOpen)}
              className={"hover:text-primary cursor-pointer"}
            ></Menu>
          )}

          {menuOpen && (
            <div
              className={
                "md:hidden fixed top-0 right-0 h-full w-screen my-15 animate-fade-in"
              }
            >
              <div
                className={
                  "glass-strong container mx-auto px-6 py-6 flex flex-col items-center gap-4"
                }
              >
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    className={
                      "text-lg text-muted-foreground hover:text-foreground py-2 px-15 rounded-full hover:bg-surface"
                    }
                  >
                    {link.label}
                  </a>
                ))}

                <Button btnSize={"sm"}>Contact Me</Button>
              </div>
            </div>
          )}
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
