import { Link } from "@tanstack/react-router";
import logo from "@/assets/novaleo-logo.webp";
import { useBookingModal } from "@/components/BookingModalContext";

export function SiteFooter() {
  const { open: openBooking } = useBookingModal();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="Novaleo Weight & Wellness"
            className="h-20 w-auto bg-white rounded-md px-4 py-3"
          />
          <p className="mt-5 max-w-md text-primary-foreground/75 text-sm leading-relaxed">
            Functional medicine and metabolic health for professionals across Michigan and
            Wisconsin. Root-cause care, delivered through telehealth.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.tiktok.com/@katielong.np"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-gold transition-colors text-primary-foreground/60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/katielong.np"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gold transition-colors text-primary-foreground/60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/katielong.np"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gold transition-colors text-primary-foreground/60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4
            className="text-primary-foreground text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/approach" className="hover:text-gold">
                Our Approach
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/conditions" className="hover:text-gold">
                What We Treat
              </Link>
            </li>
            <li>
              <Link to="/free-15-min-call-with-katie" className="hover:text-gold">
                Book Free 15-Min Call
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className="text-primary-foreground text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>Telehealth · MI &amp; WI</li>
            <li>
              1805 Leonard st NE<br />
              Grand Rapids, Mi 49505
            </li>
            <li>
              <a href="tel:16164606337" className="hover:text-gold">
                616-460-6337
              </a>
            </li>
            <li>
              <a href="mailto:Katie@novaweightandwellness.com" className="hover:text-gold">
                Katie@novaweightandwellness.com
              </a>
            </li>
            <li>Mon – Fri · 7 AM – 6 PM</li>

            <li className="pt-2">
              <Link to="/free-15-min-call-with-katie" className="hover:text-gold text-left">
                Book Free 15-Min Call
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-prose py-6 text-xs text-primary-foreground/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:text-left text-center">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span>
                © {new Date().getFullYear()} Novaleo Weight &amp; Wellness. All rights reserved.
              </span>
              <div className="flex items-center gap-3">
                <span className="hidden md:inline text-primary-foreground/30">|</span>
                <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                <span className="text-primary-foreground/30">|</span>
                <Link to="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link>
              </div>
            </div>
            <span>
              This site is for informational purposes and does not constitute medical advice.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
