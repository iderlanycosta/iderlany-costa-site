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
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-background">
          ELEVE SEU ESTILO COM NOSSA{" "}
          <span className="italic text-rose-blush">ARTE DE UNHAS</span>{" "}
          EXCLUSIVA
        </h1>
        <p className="mt-6 font-body text-background/80 text-sm md:text-base tracking-wide max-w-md mx-auto">
          Beleza e cuidado no conforto da sua casa. Agende seu atendimento domiciliar e aproveite uma experiência personalizada.
        </p>
        <a
          href="#services"
          className="inline-block mt-8 px-8 py-3.5 bg-rose-tea text-foreground text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-rose-blush transition-colors"
        >
          Explore Nossos Serviços
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
