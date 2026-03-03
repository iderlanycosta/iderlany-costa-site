import { motion } from "framer-motion";
import heroImg from "@/assets/nails-purple.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center bg-rose-mist pt-16 md:pt-20 overflow-hidden">
    <div className="container grid md:grid-cols-2 gap-8 items-center py-16 md:py-0">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center md:text-left order-2 md:order-1"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-foreground">
          ELEVE SEU ESTILO COM NOSSA{" "}
          <span className="italic text-rose-tea">ARTE DE UNHAS</span>{" "}
          EXCLUSIVA
        </h1>
        <p className="mt-6 font-body text-muted-foreground text-sm md:text-base tracking-wide max-w-md mx-auto md:mx-0">
          Sofisticação e cuidado em cada detalhe. Transforme suas unhas em obras de arte.
        </p>
        <a
          href="#services"
          className="inline-block mt-8 px-8 py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-foreground/80 transition-colors"
        >
          Explore Nossos Serviços
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="order-1 md:order-2"
      >
        <img
          src={heroImg}
          alt="Unhas artísticas elegantes com arte floral"
          className="w-full h-[50vh] md:h-[70vh] object-cover rounded-sm"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
