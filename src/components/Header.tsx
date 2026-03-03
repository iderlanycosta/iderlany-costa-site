import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Services", "Gallery", "About", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl tracking-widest text-foreground">
          DL Esmalteria
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-foreground/70 hover:text-foreground text-xs tracking-[0.2em] uppercase font-body transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-rose-tea text-primary text-xs tracking-[0.15em] uppercase font-body font-medium hover:bg-rose-blush transition-colors"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background border-t border-border pb-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-foreground/70 hover:text-foreground text-sm tracking-[0.15em] uppercase font-body"
            >
              {link}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-6 py-3 bg-rose-tea text-primary text-sm tracking-[0.15em] uppercase font-body font-medium"
            >
              Book Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
