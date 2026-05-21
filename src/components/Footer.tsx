import { Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-background text-foreground border-t border-border py-16">
    <div className="container text-center">
      <p className="font-display text-2xl tracking-widest mb-6">Esmalteria Iderlany Costa</p>

      <div className="flex justify-center gap-6 mb-8">
        <a href="https://www.instagram.com/iderlany_costta?igsh=MXYybjgyYXBxZjhiaQ==" className="text-muted-foreground hover:text-rose-tea transition-colors" aria-label="Instagram">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/iderlany_costta?igsh=MXYybjgyYXBxZjhiaQ==" className="text-muted-foreground hover:text-rose-tea transition-colors" aria-label="Facebook">
          <Facebook size={20} strokeWidth={1.5} />
        </a>
      </div>

      <div className="flex justify-center gap-6 mb-8 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
      </div>

      <p className="font-body text-xs text-muted-foreground/60 tracking-wide">
        www.bydtecnologia.com.br. © 2026 Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
