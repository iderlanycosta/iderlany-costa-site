import { WHATSAPP_URL } from "@/lib/contato";

const CALENDAR_SRC =
  "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&showNav=0&showTabs=0&showCalendars=0&showTz=0&src=MDM2MzljZDUxNzA2ZGVkNWNkZWFlMDU0ZTE5ZjEwOWJhNDZlZjEzNWE0ZWQxNDQ2NDY3YTQ3NzRiYWFiOTY0NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23e67c73";

const AvailabilitySection = () => (
  <section id="agenda" className="bg-nude/45 py-20 md:py-28">
    <div className="container grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
      <div>
        <h2 className="text-4xl md:text-5xl">Agenda</h2>
        <p className="mt-5 max-w-[34ch] text-muted-foreground">
          O calendário mostra os horários já reservados e é atualizado na hora. Escolha um dia livre e me chame para
          reservar.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-esmalte px-7 py-4 font-medium text-porcelana transition-colors hover:bg-esmalte-escuro"
        >
          Reservar horário
        </a>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white">
        <iframe
          title="Agenda de horários de Iderlany Costa"
          src={CALENDAR_SRC}
          className="h-[420px] w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default AvailabilitySection;
