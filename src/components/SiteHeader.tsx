import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/novaleo-logo.webp";
import { Menu, X, Phone } from "lucide-react";
import { useBookingModal } from "./BookingModalContext";

type NavItem = { to: string; hash?: string; label: string };

const nav: NavItem[] = [
  { to: "/about", label: "About" },
  { to: "/approach", label: "Our Approach" },
  { to: "/services", label: "Services" },
  { to: "/what-we-treat", label: "What We Treat" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { open: openBooking } = useBookingModal();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-prose flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Novaleo Weight & Wellness" className="h-14 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to as any}
              hash={n.hash}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+116168014648"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors border border-primary/30 rounded-full px-4 py-2"
          >
            <Phone className="h-4 w-4" />
            1-616-801-4648
          </a>
          <Link to="/free-15-min-call-with-katie"  className="btn-gold text-sm">
            Book Free 15-Min Call
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-primary"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to as any}
                hash={n.hash}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+116168014648"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 text-base font-semibold text-primary"
            >
              <Phone className="h-4 w-4" /> 1-616-801-4648
            </a>
            <Link to="/free-15-min-call-with-katie" onClick={() => setOpen(false)} className="btn-gold text-sm w-fit">
              Book Free 15-Min Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
