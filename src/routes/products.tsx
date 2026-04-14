import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ImageOff, Info } from "lucide-react";
import { products, categories, type Product } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products - Used PC Tech | PC Components in Guwahati" },
      { name: "description", content: "Browse our selection of quality PC components. All products are tested and verified. Graphics cards, RAM, SSDs, and accessories." },
      { property: "og:title", content: "Products - Used PC Tech" },
      { property: "og:description", content: "Browse quality tested PC components at affordable prices." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground">Our products</h1>
        <p className="mt-2 text-muted-foreground">
          Browse our selection of quality PC components. All products are tested and verified.
        </p>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3">
          <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-primary">How to order</p>
            <p className="text-sm text-muted-foreground">
              To order, contact us on WhatsApp or visit our store in Guwahati, Assam. You can also select parts to build a custom PC.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
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
      </div>
    </main>
  );
}
