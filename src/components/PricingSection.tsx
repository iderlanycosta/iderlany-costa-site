const groups = [
  {
    name: "Alongamento",
    items: [
      { service: "Alongamento natural", price: 130 },
      { service: "Alongamento com nail art", price: 170 },
    ],
  },
  {
    name: "Banho de gel",
    items: [
      { service: "Banho de gel natural", price: 110 },
      { service: "Banho de gel com nail art", price: 140 },
    ],
  },
  {
    name: "Blindagem",
    items: [
      { service: "Blindagem natural", price: 70 },
      { service: "Blindagem com esmaltação em gel", price: 80 },
    ],
  },
  {
    name: "Mãos e pés",
    items: [
      { service: "Manicure e pedicure", price: 90 },
      { service: "Spa dos pés", price: 120 },
    ],
  },
];

const PricingSection = () => (
  <section id="precos" className="py-20 md:py-28">
    <div className="container max-w-4xl">
      <h2 className="text-4xl md:text-5xl">Preços</h2>
      <p className="mt-4 max-w-[48ch] text-muted-foreground">
        Valores por atendimento. Para combinar mais de um serviço, me chame no WhatsApp.
      </p>

      <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.name}>
            <h3 className="border-b border-foreground/70 pb-2 text-2xl">{group.name}</h3>
            <dl>
              {group.items.map((item) => (
                <div key={item.service} className="flex items-baseline gap-3 border-b border-border py-4">
                  <dt>{item.service}</dt>
                  <span
                    className="min-w-6 flex-1 border-b border-dotted border-foreground/30"
                    aria-hidden="true"
                  />
                  <dd className="whitespace-nowrap font-display text-xl tabular-nums">R$ {item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
