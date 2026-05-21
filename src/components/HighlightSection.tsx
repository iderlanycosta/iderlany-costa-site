import { motion } from "framer-motion";
import highlightImg from "@/GALERIA/nails-red.jpeg";

const HighlightSection = () => (
  <section className="relative bg-background text-foreground py-24 md:py-32 overflow-hidden">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-tea mb-4">Exclusivo</p>
        <h2 className="font-display text-3xl md:text-5xl tracking-wide leading-tight mb-6">
          DESCUBRA NOSSOS{" "}
          <span className="italic">DESIGNS</span>

        </h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
          Cada design é uma expressão de elegância e sofisticação. Nossos artistas criam peças únicas
          que transformam suas unhas em verdadeiras joias.
        </p>
        <a
          href="https://wa.me/5598984097983"
          className="inline-block mt-8 px-8 py-3.5 bg-rose-tea text-primary text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-rose-blush transition-colors"
        >
          Agendar Agora
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={highlightImg}
          alt="Mão com unhas elaboradas segurando frasco de perfume luxuoso"
          className="w-full h-[50vh] md:h-[60vh] object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default HighlightSection;
