import { Link } from "@tanstack/react-router";
import { Monitor } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="h-6 w-6" />
              <span className="text-lg font-bold">Used PC Tech</span>
            </div>
            <p className="text-sm opacity-70">
              Best PC parts & custom builds in Guwahati. Reliable, tested components at affordable prices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/products" className="hover:opacity-100 transition-opacity">Products</Link>
              <Link to="/build-pc" className="hover:opacity-100 transition-opacity">Build Your PC</Link>
              <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <a href="tel:+919864543523" className="hover:opacity-100 transition-opacity">+91 9864543523</a>
              <a href="mailto:info@usedpctech.com" className="hover:opacity-100 transition-opacity">info@usedpctech.com</a>
              <p>Guwahati, Assam, India</p>
              <p>Mon-Sat: 10 AM - 8 PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Used PC Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
