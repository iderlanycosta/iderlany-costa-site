import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contato";

const Footer = () => (
  <footer className="bg-tinta pb-24 pt-14 text-porcelana md:pb-14">
    <div className="container flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:pr-28">
      <div>
        <p className="font-display text-3xl">Iderlany Costa</p>
        <p className="mt-1 text-porcelana/70">Nail designer</p>
      </div>

      <ul className="space-y-3">
        <li>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 hover:text-nude"
          >
            <MessageCircle size={18} strokeWidth={1.6} aria-hidden="true" />
            {WHATSAPP_DISPLAY}
          </a>
        </li>
        <li>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 hover:text-nude"
          >
            <Instagram size={18} strokeWidth={1.6} aria-hidden="true" />
            {INSTAGRAM_HANDLE}
          </a>
        </li>
      </ul>
    </div>

    <div className="container mt-12">
      <p className="border-t border-porcelana/15 pt-6 text-sm text-porcelana/60">
        © 2026 Iderlany Costa. Site por{" "}
        <a
          href="https://www.bydtecnologia.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-porcelana"
        >
          BYD Tecnologia
        </a>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
