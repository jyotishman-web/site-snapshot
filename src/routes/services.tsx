import { createFileRoute } from "@tanstack/react-router";
import { Wrench, TrendingUp, Sparkles, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Used PC Tech | PC Repair & Upgrade Guwahati" },
      { name: "description", content: "Professional PC services - repair, upgrade, cleaning & maintenance. Expert technicians with quality parts in Guwahati." },
      { property: "og:title", content: "Services - Used PC Tech" },
      { property: "og:description", content: "Professional PC repair, upgrade, and maintenance services in Guwahati." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "PC repair",
      description:
        "Expert diagnosis and repair for all PC issues. From hardware failures to software problems, we fix it all with quick turnaround times and quality parts.",
    },
    {
      icon: TrendingUp,
      title: "PC upgrade",
      description:
        "Boost your PC performance with component upgrades. We help you choose and install the right RAM, SSD, graphics card, or processor for your needs.",
    },
    {
      icon: Sparkles,
      title: "Cleaning & maintenance",
      description:
        "Keep your PC running smoothly with professional cleaning and maintenance. We remove dust, replace thermal paste, and optimize system performance.",
    },
  ];

  return (
    <main className="min-h-screen bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground">Our services</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional PC services with expert technicians and quality parts. We keep your computer running at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{service.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-card border border-border p-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground">Need help with your PC?</h2>
          <p className="mt-3 text-muted-foreground">
            Contact us on WhatsApp or visit our store in Guwahati. Our expert technicians are ready to help with any PC issue.
          </p>
          <a
            href="https://wa.me/919864543523?text=Hi,%20I%20need%20help%20with%20PC%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors"
            style={{ backgroundColor: "#25D366", color: "white" }}
          >
            <MessageCircle className="h-4 w-4" />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
