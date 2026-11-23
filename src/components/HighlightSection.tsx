import nailsRed from "@/GALERIA/nails-red.avif";

const HighlightSection = () => (
  <section id="atendimento" className="bg-esmalte py-20 md:py-28">
    <div className="container grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <img
        src={nailsRed}
        alt="Unhas amendoadas douradas com glitter"
        className="aspect-[4/5] w-full rounded-lg object-cover"
        loading="lazy"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.021135390485!2d-44.22345282426907!3d-2.4999216381585168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69372ee74809f%3A0xbe9e2dfbf4009d22!2sJacqueline%20Primo%20Lash%20Designer!5e0!3m2!1spt-BR!2sbr!4v1795449077002!5m2!1spt-BR!2sbr"
        title="Localização de Jacqueline Primo Lash Designer no Google Maps"
        className="aspect-[4/5] w-full rounded-lg border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  </section>
);

export default HighlightSection;
