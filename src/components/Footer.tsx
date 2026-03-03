import { Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container text-center">
      <p className="font-display text-2xl tracking-widest mb-6">DL Esmalteria</p>

      <div className="flex justify-center gap-6 mb-8">
        <a href="#" className="text-primary-foreground/50 hover:text-rose-tea transition-colors" aria-label="Instagram">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-primary-foreground/50 hover:text-rose-tea transition-colors" aria-label="Facebook">
          <Facebook size={20} strokeWidth={1.5} />
        </a>
      </div>

      <div className="flex justify-center gap-6 mb-8 font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/40">
        <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a>
      </div>

      <p className="font-body text-xs text-primary-foreground/30 tracking-wide">
        Obrigado por escolher a DL Esmalteria. © 2026 Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
