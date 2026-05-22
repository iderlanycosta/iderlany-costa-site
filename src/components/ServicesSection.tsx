import { motion } from "framer-motion";
import { Gem, Palette, Heart, Pyramid } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "ALOGAMENTO EM GEL",
    description: "Tratamento premium com produtos de alta qualidade para unhas impecáveis e duradouras.",
  },
  {
    icon: Heart,
    title: "BANHO DE GEL",
    description: "Designs exclusivos criados especialmente para expressar sua personalidade única.",
  },
  {
    icon: Heart,
    title: "ESMALTAÇÃO EM GEL",
    description: "Designs exclusivos criados especialmente para expressar sua personalidade única.",
  },
  {
    icon: Heart,
    title: "SPA DOS PÉS",
    description: "Hidratação profunda, fortalecimento e spa para pés que merecem atenção especial.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-tea mb-3">O que oferecemos</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground">Nossos Serviços</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-secondary p-10 text-center group hover:shadow-lg transition-shadow text-secondary-foreground"
          >
            <s.icon className="mx-auto mb-6 text-secondary-foreground" size={32} strokeWidth={1.2} />
            <h3 className="font-display text-lg tracking-wider mb-4 text-secondary-foreground font-semibold">{s.title}</h3>
            <p className="font-body text-sm text-secondary-foreground/90 leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#pricing"
          className="inline-block px-8 py-3 border border-foreground text-foreground text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-foreground hover:text-primary-foreground transition-colors"
        >
          Ver Preços
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
