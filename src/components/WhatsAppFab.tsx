import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919864543523?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20PC%20parts%20and%20builds"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" style={{ color: "#fff" }} />
    </a>
  );
}
