const services = [
  {
    title: "Alongamento em gel",
    description: "Unhas mais longas e resistentes, moldadas no formato e no comprimento que você escolher.",
  },
  {
    title: "Banho de gel",
    description: "Uma camada de gel sobre a unha natural para fortalecer e deixar o acabamento uniforme, sem alongar.",
  },
  {
    title: "Esmaltação em gel",
    description: "Cor com brilho que dura bem mais que o esmalte comum e não descasca no dia a dia.",
  },
  {
    title: "Spa dos pés",
    description: "Esfoliação, hidratação e cuidado com as cutículas para pés macios e bem tratados.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="border-t border-border py-20 md:py-28">
    <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
      <div>
        <h2 className="text-4xl md:text-5xl">Serviços</h2>
        <p className="mt-5 max-w-[34ch] text-muted-foreground">
          Quase todos podem levar nail art. Os valores de cada opção estão na tabela de preços.
        </p>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {services.map((s) => (
          <li key={s.title} className="grid gap-2 py-7 sm:grid-cols-[15rem_1fr] sm:gap-8">
            <h3 className="text-2xl">{s.title}</h3>
            <p className="max-w-[52ch] text-muted-foreground">{s.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ServicesSection;
