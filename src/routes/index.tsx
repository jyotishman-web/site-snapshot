import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Shield, Wrench, Monitor, Cpu, HardDrive, ImageOff } from "lucide-react";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Used PC Tech - Best PC Parts & Custom Builds in Guwahati" },
      { name: "description", content: "Get reliable, tested PC components at affordable prices with expert guidance. From gaming rigs to office setups, we build PCs tailored to your needs and budget." },
      { property: "og:title", content: "Used PC Tech - Premium PC Parts & Custom Builds" },
      { property: "og:description", content: "500+ happy customers. Best price guarantee. Expert service in Guwahati." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredProducts = products.slice(0, 8);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1676736173051-6398cae58e3e?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl" style={{ color: "white" }}>
            Premium PC parts & custom builds in Guwahati
          </h1>
          <p className="mt-6 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.8)" }}>
            Get reliable, tested PC components at affordable prices with expert guidance. From gaming rigs to office setups, we build PCs tailored to your needs and budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/build-pc"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Build Your PC
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent/20"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
            >
              View Products
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { icon: Users, text: "500+ happy customers" },
              { icon: Shield, text: "Best price guarantee" },
              { icon: Wrench, text: "Expert service" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-lg px-5 py-3"
                style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#1a1a2e" }}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Featured Products</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Check out our latest PC components and accessories
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border border-border bg-card p-4 flex flex-col"
              >
                <div className="h-40 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <ImageOff className="h-10 w-10 text-muted-foreground/40" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 self-start">
                  {product.category}
                </span>
                <h3 className="mt-3 font-semibold text-foreground">{product.name}</h3>
                <p className="text-primary font-bold mt-1">₹{product.price.toLocaleString("en-IN")}</p>
                <p className="text-sm text-muted-foreground mt-1 flex-1">{product.description}</p>
                <Link
                  to="/build-pc"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  Select for Build
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Why choose Used PC Tech?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Monitor, title: "Quality Tested", desc: "Every component is thoroughly tested before sale" },
              { icon: Cpu, title: "Expert Guidance", desc: "Our team helps you pick the perfect parts for your build" },
              { icon: HardDrive, title: "Best Prices", desc: "Competitive pricing on all PC components in Guwahati" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center p-6 rounded-xl border border-border bg-card">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
