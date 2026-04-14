export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Accessories" | "Graphics Cards" | "RAM" | "SSD";
};

export const products: Product[] = [
  // Accessories
  { id: "a1", name: "Cooling Fan", description: "High-speed cooling fan", price: 1200, category: "Accessories" },
  { id: "a2", name: "USB Hub", description: "4-port USB 3.0 hub", price: 600, category: "Accessories" },
  { id: "a3", name: "Headphones", description: "Gaming headphones with mic", price: 2500, category: "Accessories" },
  { id: "a4", name: "Mouse Pad", description: "Large gaming mouse pad", price: 400, category: "Accessories" },
  { id: "a5", name: "Cable Management Kit", description: "Organize your cables", price: 500, category: "Accessories" },
  { id: "a6", name: "Gaming Mouse", description: "Precision gaming mouse with RGB", price: 1500, category: "Accessories" },
  { id: "a7", name: "Mechanical Keyboard", description: "Mechanical switches for gaming", price: 3000, category: "Accessories" },
  { id: "a8", name: "Monitor Stand", description: "Adjustable monitor stand", price: 800, category: "Accessories" },
  // Graphics Cards
  { id: "g1", name: "GTX 1650", description: "Entry-level gaming GPU", price: 15000, category: "Graphics Cards" },
  { id: "g2", name: "RTX 3050", description: "Budget gaming with ray tracing", price: 18000, category: "Graphics Cards" },
  { id: "g3", name: "RTX 3060", description: "Mid-range gaming powerhouse", price: 28000, category: "Graphics Cards" },
  { id: "g4", name: "RTX 4060", description: "Latest generation budget gaming", price: 22000, category: "Graphics Cards" },
  { id: "g5", name: "RTX 4070", description: "High-end gaming GPU", price: 45000, category: "Graphics Cards" },
  { id: "g6", name: "RTX 4090", description: "Ultimate gaming and workstation GPU", price: 120000, category: "Graphics Cards" },
  // RAM
  { id: "r1", name: "Kingston 8GB DDR4", description: "Budget-friendly RAM for office work", price: 2500, category: "RAM" },
  { id: "r2", name: "Kingston 16GB DDR4", description: "Perfect for gaming and multitasking", price: 4500, category: "RAM" },
  { id: "r3", name: "Corsair 16GB DDR4", description: "High-performance gaming RAM", price: 5000, category: "RAM" },
  { id: "r4", name: "Corsair 32GB DDR4", description: "Professional workstation RAM", price: 8500, category: "RAM" },
  { id: "r5", name: "G.Skill 16GB DDR5", description: "Latest DDR5 technology", price: 6500, category: "RAM" },
  { id: "r6", name: "G.Skill 32GB DDR5", description: "Premium DDR5 for high-end builds", price: 12000, category: "RAM" },
  // SSD
  { id: "s1", name: "Kingston 256GB NVMe", description: "Entry-level fast storage", price: 2000, category: "SSD" },
  { id: "s2", name: "Samsung 500GB NVMe", description: "Reliable and fast SSD", price: 3500, category: "SSD" },
  { id: "s3", name: "WD 500GB SSD", description: "Western Digital quality storage", price: 3200, category: "SSD" },
  { id: "s4", name: "WD 1TB SSD", description: "1TB fast storage solution", price: 6000, category: "SSD" },
  { id: "s5", name: "Kingston 1TB NVMe", description: "High-speed 1TB storage", price: 5500, category: "SSD" },
  { id: "s6", name: "Samsung 2TB NVMe", description: "Large capacity fast storage", price: 12000, category: "SSD" },
];

export const categories = ["All", "Accessories", "Graphics Cards", "RAM", "SSD"] as const;
