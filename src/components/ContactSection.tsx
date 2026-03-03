import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-tea mb-3">Fale conosco</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground">Contato</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-rose-tea mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <p className="font-body text-sm font-medium text-foreground tracking-wide">Endereço</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Rua das Flores, 123 — Centro, São Paulo</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-rose-tea mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <p className="font-body text-sm font-medium text-foreground tracking-wide">Telefone</p>
                <p className="font-body text-sm text-muted-foreground mt-1">(11) 99999-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-rose-tea mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <p className="font-body text-sm font-medium text-foreground tracking-wide">E-mail</p>
                <p className="font-body text-sm text-muted-foreground mt-1">contato@dlesmalteria.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-rose-tea mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <p className="font-body text-sm font-medium text-foreground tracking-wide">Horário</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Seg–Sáb: 9h–19h</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3.5 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-rose-tea transition-colors"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3.5 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-rose-tea transition-colors"
            />
            <textarea
              placeholder="Mensagem"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-3.5 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-rose-tea transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-body font-medium hover:bg-foreground/80 transition-colors"
            >
              Enviar
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
