import React, { type FormEvent, useState } from "react";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export type FooterLink = { label: string; href: string };

interface FooterProps {
  brand?: string;
  logoSrc?: string;
  logoAlt?: string;
  nav?: FooterLink[];
  email?: string;
  phone?: string;
  addressLines?: string[];
  privacyHref?: string;
  onSubscribe?: (email: string) => Promise<void> | void;
  className?: string;
}

const DEFAULT_NAV: FooterLink[] = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export default function Footer({
  brand = "Positivus",
  logoSrc,
  logoAlt,
  nav = DEFAULT_NAV,
  email = "info@positivus.com",
  phone = "555-567-8901",
  addressLines = ["1234 Main St", "Moonstone City, Stardust State 12345"],
  privacyHref = "#privacy",
  onSubscribe,
  className = "",
}: FooterProps) {
  return (
    <footer className={`mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 ${className}`}>
      <div className="rounded-[28px] bg-background text-grey ring-1 ring-dark/20 shadow-xl rounded-t-[44px]">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 bg-dark rounded-t-[44px]">
          <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 md:grid-cols-[auto_1fr_auto]">
            <Logo brand={brand} src={logoSrc} alt={logoAlt ?? brand} />

            <nav aria-label="Footer">
              <ul className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm font-medium text-grey hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto flex items-center justify-end gap-3 sm:gap-4">
              <SocialButton label="LinkedIn" href="#" icon={<Linkedin className="size-4" />} />
              <SocialButton label="Facebook" href="#" icon={<Facebook className="size-4" />} />
              <SocialButton label="Twitter" href="#" icon={<Twitter className="size-4" />} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <span className="inline-block rounded-[10px] bg-primary px-3 py-1 text-sm font-semibold text-black">Contact us:</span>

              <div className="mt-4 space-y-3 text-sm text-white/90">
                <p>
                  <span className="text-grey">Email:</span> {email}
                </p>
                <p>
                  <span className="text-grey">Phone:</span> {phone}
                </p>
                <address className="not-italic">
                  <span className="text-grey">Address:</span>
                  <br />
                  {addressLines.map((line, i) => (
                    <>
                      <span key={i}>{line}</span>
                      {i < addressLines.length - 1 && <br />}
                    </>
                  ))}
                </address>
              </div>
            </div>

            <div className="rounded-2xl bg-dark/60 p-4 sm:p-5 md:p-6 ring-1 ring-dark/30">
              <SubscribeForm onSubscribe={onSubscribe} />
            </div>
          </div>

          <hr className="my-8 h-px w-full border-0 bg-white/20" />

          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-grey/90">© {new Date().getFullYear()} {brand}. All Rights Reserved.</p>
            <a
              href={privacyHref}
              className="text-xs font-medium text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Logo({ brand, src, alt }: { brand: string; src?: string; alt?: string }) {
  return (
    <a href="#" className="inline-flex items-center gap-3 text-white">
      <img src={src} alt={alt ?? brand} className="h-7 w-auto" />
    </a>
  );
}

function SocialButton({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      {icon}
    </a>
  );
}

function SubscribeForm({ onSubscribe }: { onSubscribe?: (email: string) => Promise<void> | void }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    try {
      setLoading(true);
      await onSubscribe?.(value);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto] sm:gap-4">
      <label htmlFor="footer-email" className="sr-only">
        Email
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="Email"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-12 w-full rounded-xl border border-white/25 bg-dark px-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
      />
      <button
        type="submit"
        disabled={loading}
        className="h-12 rounded-xl bg-primary px-5 text-sm font-semibold text-black transition-transform hover:translate-y-[-1px] disabled:opacity-70"
      >
        {loading ? "Sending…" : "Subscribe to news"}
      </button>
    </form>
  );
}
