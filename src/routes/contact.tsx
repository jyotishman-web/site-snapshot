import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Used PC Tech | Visit Us in Guwahati" },
      { name: "description", content: "Visit our store in Guwahati or reach out through phone, WhatsApp, or email. Mon-Sat 10 AM - 8 PM." },
      { property: "og:title", content: "Contact - Used PC Tech" },
      { property: "og:description", content: "Get in touch with Used PC Tech in Guwahati, Assam." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground">Get in touch</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Visit our store in Guwahati or reach out through phone, WhatsApp, or email. We're here to help with all your PC needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+919864543523"
                className="rounded-xl border border-border bg-card p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-primary">+91 9864543523</p>
                </div>
              </a>
              <a
                href="https://wa.me/919864543523?text=Hi,%20I%20would%20like%20to%20inquire%20about%20PC%20parts"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-card p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-primary">Chat with us</p>
                </div>
              </a>
              <a
                href="mailto:info@usedpctech.com"
                className="rounded-xl border border-border bg-card p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-primary">info@usedpctech.com</p>
                </div>
              </a>
              <div className="rounded-xl border border-border bg-card p-5 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Business hours</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 10 AM - 8 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-card p-5 flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Visit our store</p>
                <p className="text-sm text-muted-foreground">Used PC Tech</p>
                <p className="text-sm text-muted-foreground">Guwahati, Assam</p>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
            </div>

            <a
              href="https://wa.me/919864543523?text=Hi,%20I%20would%20like%20to%20inquire%20about%20PC%20parts"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-colors"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Find us on the map</h2>
            <div className="rounded-xl overflow-hidden border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228222.97765089037!2d91.5830843!3d26.1445169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sUsed%20PC%20Tech!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Used PC Tech Location"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
