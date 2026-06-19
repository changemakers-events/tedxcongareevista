import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";
import tedxLogo from "@/assets/tedx-logo.png.asset.json";
import inspireLogo from "@/assets/inspire-columbia.png.asset.json";

const socials = [
  { href: "https://www.instagram.com/tedxcongareevista/", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/TEDxCongareeVista", icon: Facebook, label: "Facebook" },
  { href: "https://www.linkedin.com/company/tedxcongareevista/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@tedxcongareevista", icon: Youtube, label: "YouTube" },
  { href: "mailto:info@tedxcongareevista.org", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-[var(--cream)]">
      {/* TEDx block */}
      <div className="container-x py-14 text-center">
        <img src={tedxLogo.url} alt="TEDxCongaree Vista" className="mx-auto h-12 md:h-16 w-auto" />
        <p className="mt-6 text-sm text-foreground/70">
          This independent TEDx event is operated under license from TED.
          <br />
          © {new Date().getFullYear()} Inspire Columbia Inc., a 501(c)3 nonprofit. All rights reserved.
        </p>

        <div className="mt-6 flex justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-foreground/70 hover:text-primary transition"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-foreground/80">
          <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noreferrer" className="hover:text-primary">About TED</a>
          <span className="text-foreground/30">·</span>
          <Link to="/about" className="hover:text-primary">About Us</Link>
          <span className="text-foreground/30">·</span>
          <Link to="/support" className="hover:text-primary">Support</Link>
          <span className="text-foreground/30">·</span>
          <a href="mailto:info@tedxcongareevista.org" className="hover:text-primary">Contact</a>
        </div>
      </div>

      {/* Inspire Columbia block */}
      <div className="bg-[#241b4a] text-white">
        <div className="container-x py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="https://inspirecolumbia.org"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <img src={inspireLogo.url} alt="Inspire Columbia" className="h-14 w-auto" />
            <span className="font-display text-xl tracking-tight">Inspire Columbia</span>
          </a>
          <p className="text-sm text-white/80 max-w-md text-center md:text-right">
            Presented by{" "}
            <a href="https://inspirecolumbia.org" target="_blank" rel="noreferrer" className="underline hover:text-primary">
              Inspire Columbia
            </a>
            , the team behind TEDxCongaree Vista.
          </p>
        </div>
      </div>
    </footer>
  );
}
