import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Monitor, MessageCircle } from "lucide-react";
import { products, type Product } from "@/lib/products";

export const Route = createFileRoute("/build-pc")({
  head: () => ({
    meta: [
      { title: "Build Your PC - Used PC Tech | Custom PC Builder Guwahati" },
      { name: "description", content: "Build your custom PC by choosing individual parts or selecting from recommended budget builds. RAM, SSD, GPU, and accessories." },
      { property: "og:title", content: "Build Your PC - Used PC Tech" },
      { property: "og:description", content: "Choose parts and build your custom PC with expert guidance." },
    ],
  }),
  component: BuildPCPage,
});

type SelectedParts = Record<string, Product>;

const partCategories = ["RAM", "SSD", "Graphics Cards", "Accessories"] as const;

const budgetBuilds = [
  {
    name: "Office Basic",
    purpose: "Office",
    parts: ["r1", "s1"],
    description: "Perfect for everyday office tasks",
  },
  {
    name: "Gaming Starter",
    purpose: "Gaming",
    parts: ["r2", "s2", "g1"],
    description: "Entry-level gaming setup",
  },
  {
    name: "Gaming Pro",
    purpose: "Gaming",
    parts: ["r4", "s4", "g3"],
    description: "Mid-range gaming powerhouse",
  },
  {
    name: "Content Creator",
    purpose: "Editing",
    parts: ["r6", "s6", "g5"],
    description: "High-end editing and content creation",
  },
];

function BuildPCPage() {
  const [tab, setTab] = useState<"parts" | "builds">("parts");
  const [selected, setSelected] = useState<SelectedParts>({});
  const [purpose, setPurpose] = useState("Gaming");

  const total = Object.values(selected).reduce((sum, p) => sum + p.price, 0);

  const togglePart = (product: Product) => {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[product.id]) {
        delete next[product.id];
      } else {
        // Remove other items from same category (except accessories)
        if (product.category !== "Accessories") {
          Object.entries(next).forEach(([id, p]) => {
            if (p.category === product.category) delete next[id];
          });
        }
        next[product.id] = product;
      }
      return next;
    });
  };

  const selectBuild = (build: (typeof budgetBuilds)[0]) => {
    const parts: SelectedParts = {};
    build.parts.forEach((id) => {
      const p = products.find((prod) => prod.id === id);
      if (p) parts[p.id] = p;
    });
    setSelected(parts);
    setPurpose(build.purpose);
  };

  const generateWhatsAppLink = () => {
    const partsList = Object.values(selected)
      .map((p) => `- ${p.name}: ₹${p.price.toLocaleString("en-IN")}`)
      .join("\n");
    const msg = `Hi, I would like to build a custom PC for ${purpose}.\n\nSelected parts:\n${partsList}\n\nTotal: ₹${total.toLocaleString("en-IN")}`;
    return `https://wa.me/919864543523?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main className="min-h-screen bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Monitor className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Build your custom PC</h1>
          <p className="mt-2 text-muted-foreground">
            Choose individual parts or select from our recommended budget builds.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-border bg-card p-1">
            <button
              onClick={() => setTab("parts")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                tab === "parts" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Select Parts
            </button>
            <button
              onClick={() => setTab("builds")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                tab === "builds" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Budget Builds
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {tab === "parts" ? (
              <div className="space-y-8">
                {partCategories.map((cat) => {
                  const catProducts = products.filter((p) => p.category === cat);
                  return (
                    <div key={cat}>
                      <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
                        {cat}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {catProducts.map((product) => {
                          const isSelected = !!selected[product.id];
                          return (
                            <button
                              key={product.id}
                              onClick={() => togglePart(product)}
                              className={`text-left rounded-xl border p-4 transition-all ${
                                isSelected
                                  ? "border-primary bg-primary/5 ring-2 ring-primary"
                                  : "border-border bg-card hover:border-primary/40"
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className="font-semibold text-foreground">{product.name}</p>
                                  <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                                </div>
                                <div
                                  className={`h-5 w-5 rounded-full border-2 shrink-0 mt-1 flex items-center justify-center ${
                                    isSelected ? "border-primary bg-primary" : "border-border"
                                  }`}
                                >
                                  {isSelected && (
                                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "white" }} />
                                  )}
                                </div>
                              </div>
                              <p className="text-primary font-bold mt-2">
                                ₹{product.price.toLocaleString("en-IN")}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {budgetBuilds.map((build) => {
                  const buildTotal = build.parts.reduce((sum, id) => {
                    const p = products.find((prod) => prod.id === id);
                    return sum + (p?.price || 0);
                  }, 0);
                  return (
                    <button
                      key={build.name}
                      onClick={() => selectBuild(build)}
                      className="text-left rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all"
                    >
                      <h3 className="text-lg font-bold text-foreground">{build.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{build.description}</p>
                      <p className="text-primary font-bold mt-3">
                        ₹{buildTotal.toLocaleString("en-IN")}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {build.parts.map((id) => {
                          const p = products.find((prod) => prod.id === id);
                          return p ? (
                            <span
                              key={id}
                              className="text-xs bg-secondary rounded-full px-2 py-1 text-muted-foreground"
                            >
                              {p.name}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Your Selection</h3>
              {Object.values(selected).length === 0 ? (
                <p className="text-sm text-muted-foreground">No parts selected yet.</p>
              ) : (
                <div className="space-y-2 mb-4">
                  {Object.values(selected).map((p) => (
                    <div key={p.id} className="flex justify-between text-sm">
                      <span className="text-foreground">{p.name}</span>
                      <span className="text-muted-foreground">₹{p.price.toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="border-t border-border pt-4 flex justify-between font-bold text-foreground">
                <span>Total:</span>
                <span className="text-primary">₹{total.toLocaleString("en-IN")}</span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-foreground mb-2">Purpose</p>
                <div className="flex gap-2">
                  {["Gaming", "Office", "Editing"].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPurpose(p)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        purpose === p
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-colors"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                <MessageCircle className="h-4 w-4" />
                Generate WhatsApp Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
