import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contato";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Como funciona", href: "#atendimento" },
  { label: "Preços", href: "#precos" },
  { label: "Agenda", href: "#agenda" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-border bg-porcelana/95 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" className="flex items-baseline gap-2 leading-none">
          <span className="font-display text-xl md:text-2xl">Iderlany Costa</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">nail designer</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções do site">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.95rem] text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-esmalte px-5 py-2.5 text-[0.95rem] font-medium text-porcelana transition-colors hover:bg-esmalte-escuro"
          >
            Agendar
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="-mr-2 p-2 text-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border pb-6 lg:hidden" aria-label="Seções do site">
          <div className="container flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 font-display text-xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-esmalte py-3.5 text-center font-medium text-porcelana"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
