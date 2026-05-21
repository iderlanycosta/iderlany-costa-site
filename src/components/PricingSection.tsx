import { motion } from "framer-motion";

const prices = [
  { service: "Alogamento em Gel", price: "apartir de R$ 150" },
  { service: "Banho de Gel", price: "R$ 120" },
  { service: "Esmaltação em Gel", price: "R$ 60" },
  { service: "Remoção de Alogamento", price: "R$ 40" },
  { service: "Blindagem", price: "R$ 70" },
  { service: "Spa de Pés", price: "R$ 110" },
  { service: "Manicure e Pedicure", price: "R$ 90" },
  ,
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-tea mb-3">Investimento</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground">Tabela de Preços</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border border-border"
      >
        {prices.map((item, i) => (
          <div
            key={item.service}
            className={`flex items-center justify-between px-6 md:px-10 py-5 font-body text-sm ${i % 2 === 0 ? "bg-background" : "bg-secondary"
              } ${i < prices.length - 1 ? "border-b border-border" : ""}`}
          >
            <span className="tracking-wider text-foreground">{item.service}</span>
            <span className="tracking-wider text-rose-tea font-medium">{item.price}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
