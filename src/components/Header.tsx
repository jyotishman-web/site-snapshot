import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Monitor } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/build-pc", label: "Build Your PC" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Monitor className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Used PC Tech</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-accent"
                activeProps={{ className: "px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground" }}
                activeOptions={{ exact: true }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-3 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-accent"
                activeProps={{ className: "px-4 py-3 text-sm font-medium rounded-md bg-primary text-primary-foreground" }}
                activeOptions={{ exact: true }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
