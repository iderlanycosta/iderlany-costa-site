import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contato";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 md:bottom-6 md:right-6"
  >
    <MessageCircle className="text-white" size={28} strokeWidth={1.8} aria-hidden="true" />
  </a>
);

export default WhatsAppButton;
