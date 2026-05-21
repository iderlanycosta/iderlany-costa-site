import { motion } from "framer-motion";

const AvailabilitySection = () => (
  <section id="availability" className="py-24 md:py-32 bg-secondary">
    <div className="container max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-tea mb-3">
          Próximos Horários
        </p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
          Agenda Disponível
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
          Confira os dias e horários disponíveis antes de agendar seu atendimento
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-[800px] mx-auto rounded-[10px] overflow-hidden shadow-lg border border-border bg-white"
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&showNav=0&showTabs=0&showCalendars=0&showTz=0&src=MDM2MzljZDUxNzA2ZGVkNWNkZWFlMDU0ZTE5ZjEwOWJhNDZlZjEzNWE0ZWQxNDQ2NDY3YTQ3NzRiYWFiOTY0NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23e67c73"
          style={{ borderWidth: 0 }}
          className="w-full h-[300px]"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 space-y-8"
      >
        <p className="font-body text-sm text-muted-foreground italic">
          "Os horários são atualizados em tempo real. Para agendar, entre em contato pelo WhatsApp."
        </p>

        <a
          href="https://wa.me/5598984097983"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-rose-tea text-primary text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-rose-blush transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Agendar pelo WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default AvailabilitySection;
