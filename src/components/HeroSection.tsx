import { motion } from "framer-motion";
import retrato from "@/imagens/perfil-iderlany-costa.jpg";
import { WHATSAPP_URL } from "@/lib/contato";

const ease = [0.22, 1, 0.36, 1] as const;

/* Contorno de uma unha amendoada (coordenadas 0–1), usado como máscara do retrato */
const NAIL_PATH =
  "M0.5,0 C0.74,0.02 1,0.25 1,0.5 L1,0.88 C1,0.95 0.94,1 0.87,1 L0.13,1 C0.06,1 0,0.95 0,0.88 L0,0.5 C0,0.25 0.26,0.02 0.5,0 Z";

const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-32">
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="nail-clip" clipPathUnits="objectBoundingBox">
          <path d={NAIL_PATH} />
        </clipPath>
      </defs>
    </svg>

    <div className="container grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease }}
        className="order-2 md:order-1"
      >
        <h1 className="max-w-[13ch] text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
          Unhas <span className="whitespace-nowrap">bem-feitas,</span> no conforto da sua casa.
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg text-muted-foreground">
          Sou Iderlany Costa, nail designer.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-esmalte px-7 py-4 font-medium text-porcelana transition-colors hover:bg-esmalte-escuro"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href="#precos"
            className="font-medium underline decoration-caramelo decoration-2 underline-offset-[6px] transition-colors hover:text-esmalte"
          >
            Ver preços
          </a>
        </div>
        <p className="mt-10 max-w-[46ch] border-t border-border pt-5 text-[0.95rem] text-muted-foreground">
          Alongamento em gel, banho de gel, esmaltação em gel, blindagem, manicure, pedicure e spa dos pés.
        </p>
      </motion.div>

      <div className="relative order-1 mx-auto w-full max-w-[250px] sm:max-w-[320px] md:order-2 md:max-w-[420px]">
        {/* Esmalte bordô por trás do retrato, com o reflexo de laca */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, x: "6%", y: "4%" }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="nail-shape absolute inset-0 bg-esmalte"
          aria-hidden="true"
        >
          <span className="absolute right-[12%] top-[16%] h-[34%] w-[7%] rotate-[16deg] rounded-full bg-gradient-to-b from-white/50 to-white/0" />
        </motion.div>

        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1, ease }}
          className="relative"
        >
          <img
            src={retrato}
            alt="Iderlany Costa, nail designer, de blazer branco e sorrindo"
            width={640}
            height={800}
            className="nail-shape aspect-[4/5] w-full object-cover object-[50%_15%]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
