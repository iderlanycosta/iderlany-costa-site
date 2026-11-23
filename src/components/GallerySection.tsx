import nailsPurple from "@/GALERIA/nails-purple.avif";
import nailsPurple2 from "@/GALERIA/nails-purple-2.avif";
import nailsLuxury from "@/GALERIA/nails-luxury-highlight.avif";
import nailsRedFloral from "@/GALERIA/nails-red-floral.avif";
import nailsWhite from "@/GALERIA/nails-white.avif";
import nailsWhite2 from "@/GALERIA/nails-white-2.avif";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contato";

const images = [
  { src: nailsPurple, alt: "Unhas amendoadas vermelhas" },
  { src: nailsWhite, alt: "Unhas amendoadas brancas" },
  { src: nailsLuxury, alt: "Unhas amendoadas em tom malva" },
  { src: nailsWhite2, alt: "Unhas em tom nude natural" },
  { src: nailsPurple2, alt: "Francesinha com pontas vermelhas e detalhe floral" },
  { src: nailsRedFloral, alt: "Francesinha branca em unhas amendoadas" },
];

const GallerySection = () => (
  <section id="trabalhos" className="bg-nude/45 py-20 md:py-28">
    <div className="container">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
        <h2 className="text-4xl md:text-5xl">Trabalhos recentes</h2>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline decoration-caramelo decoration-2 underline-offset-[6px] hover:text-esmalte"
        >
          Mais no Instagram {INSTAGRAM_HANDLE}
        </a>
      </div>

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {images.map((img) => (
          <li key={img.src} className="overflow-hidden rounded-lg bg-nude">
            <img src={img.src} alt={img.alt} className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default GallerySection;
