import { motion } from "framer-motion";
import nailsPurple from "@/assets/nails-purple.jpg";
import nailsPurple2 from "@/assets/nails-purple-2.jpg";
import nailsRed from "@/assets/nails-red.jpg";
import nailsRedFloral from "@/assets/nails-red-floral.jpg";
import nailsWhite from "@/assets/nails-white.jpg";
import nailsWhite2 from "@/assets/nails-white-2.jpg";

const images = [
  { src: nailsPurple, alt: "Unhas roxas metálicas com arte floral" },
  { src: nailsWhite, alt: "Unhas brancas elegantes com detalhes florais" },
  { src: nailsRed, alt: "Unhas vermelhas vibrantes com nail art" },
  { src: nailsWhite2, alt: "Unhas brancas minimalistas com flores" },
  { src: nailsPurple2, alt: "Unhas roxas cromadas sofisticadas" },
  { src: nailsRedFloral, alt: "Unhas vermelhas com arte de flores" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 md:py-32 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-tea mb-3">Inspiração</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground">Galeria</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
