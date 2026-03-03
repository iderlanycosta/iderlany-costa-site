import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "@/assets/nails-purple.jpg";
import img2 from "@/assets/nails-red.jpg";
import img3 from "@/assets/nails-red-floral.jpg";
import img4 from "@/assets/nails-white.jpg";
import img5 from "@/assets/nails-purple-2.jpg";
import img6 from "@/assets/nails-white-2.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image slideshow */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Nail art showcase"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/50" />

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
          Sofisticação e cuidado em cada detalhe. Transforme suas unhas em obras de arte.
        </p>
        <a
          href="#services"
          className="inline-block mt-8 px-8 py-3.5 bg-rose-tea text-foreground text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-rose-blush transition-colors"
        >
          Explore Nossos Serviços
        </a>
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-background w-6" : "bg-background/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
