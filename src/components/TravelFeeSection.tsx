import { motion } from "framer-motion";
import { Info } from "lucide-react";

const travelFees = [
  { region: "Parque Vitoria e Adjacências", fee: "R$ 10" },
  { region: "Turu, Santa Rosa, Divineia e Vila Luizão.", fee: "R$ 20" },
  { region: "Araçagy e Paço do Lumiar.", fee: "R$ 25" },
  { region: "Cohama e Vinhas", fee: "R$ 25" },
  { region: "Renascença e Ponta do Farol", fee: "R$ 30" },
  { region: "São Francisco e Centro", fee: "R$ 30" },
];

const TravelFeeSection = () => {
  // Container variant for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Row variant for smooth slide-in
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <section id="travel-fee" className="py-24 md:py-32 bg-background">
      <div className="container max-w-3xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-tea mb-3">
            Atendimento Domiciliar
          </p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
            Taxa de Deslocamento
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            O valor do deslocamento varia de acordo com a localização do atendimento. 
            Consulte a região correspondente abaixo.
          </p>
        </motion.div>

        {/* Fees Table with modern staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border border-border shadow-sm rounded-sm overflow-hidden"
        >
          {travelFees.map((item, i) => (
            <motion.div
              key={item.region}
              variants={itemVariants}
              className={`flex items-center justify-between px-6 md:px-10 py-5 font-body text-sm transition-all duration-300 ${
                i % 2 === 0 
                  ? "bg-background text-foreground hover:bg-muted/30" 
                  : "bg-secondary text-secondary-foreground hover:brightness-95"
              } ${i < travelFees.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="tracking-wider font-medium">{item.region}</span>
              <span 
                className={`tracking-wider font-semibold ${
                  i % 2 === 0 ? "text-rose-tea" : "text-secondary-foreground"
                }`}
              >
                {item.fee}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Observation Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex items-start gap-2.5 px-4 text-xs text-muted-foreground justify-center text-center max-w-xl mx-auto"
        >
          <Info size={14} className="text-rose-tea shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Taxas sujeitas a alteração conforme distância, horário e disponibilidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelFeeSection;
