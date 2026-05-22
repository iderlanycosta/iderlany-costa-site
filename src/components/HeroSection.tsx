import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animated image sequence */}
      <AnimatedBackground />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="font-display text-2xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-background">
          ELEVE SEU ESTILO COM NOSSA{" "}
          <span className="italic text-secondary">ARTE DE UNHAS</span>{" "}
          EXCLUSIVA
        </h1>
        <p className="mt-6 font-body text-background/80 text-base md:text-base tracking-wide max-w-md mx-auto">
          Unhas impecáveis sem precisar sair de casa. Atendimento domiciliar com conforto, higiene e dedicação em cada detalhe.
        </p>
        <a
          href="#services"
          className="inline-block mt-8 px-8 py-3.5 bg-secondary text-foreground text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-rose-blush transition-colors"
        >
          Explore Nossos Serviços
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
